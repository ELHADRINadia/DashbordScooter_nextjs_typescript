import { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { SanityProvider } from '@sanity/react-hooks';
import { usePreviewSubscription } from '../lib/sanity';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { data: preview } = usePreviewSubscription(
    'select _id, slug, title, mainImage, body, excerpt, publishedAt, "author": author->{name, "avatar": avatar.asset->url}, "categories": categories[]->{title}, "relatedArticles": *[_type == "article" && references(^._id)] | order(publishedAt desc) {_id, slug, title, mainImage, excerpt, publishedAt, "author": author->{name, "avatar": avatar.asset->url}, "categories": categories[]->{title}}[0...3]',
    {},
    { enabled: pageProps?.preview }
  );

  const client = createClient({
    projectId: 'my-project-id',
    dataset: 'my-dataset',
    apiVersion: '2021-09-14',
    useCdn: true,
  });

  return (
    <Provider session={pageProps.session}>
      <SanityProvider client={client} preview={preview}>
        <Component {...pageProps} />
      </SanityProvider>
    </Provider>
  );
};

export default MyApp;
