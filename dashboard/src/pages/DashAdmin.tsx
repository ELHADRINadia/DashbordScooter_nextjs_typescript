import  useClient from 'next-sanity';
import { FC, useEffect, useState } from 'react';
import Table from '@/components/Table';
import Sidebar from '@/components/SideBar';

  const DashAdmin: FC = () => {
  const client = useClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchScooters = async () => {
      const scooterData = await client.fetch('*[_type == "scooter"]');
      setData(scooterData);
    };

    fetchScooters();
  }, [client]);

  return (
    <div>
      <Sidebar />
      <Table data={data} />
    </div>
  );
};

export default DashAdmin;
