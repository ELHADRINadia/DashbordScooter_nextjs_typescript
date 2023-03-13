import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800">
      <div className="flex items-center text-bold justify-center h-16 w-full text-white">
        Welcome To dashboard Admin
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="py-2">
          <a href="#" className="text-gray-300 hover:text-white">
            Scooter
          </a>
        </div>
        <div className="py-2">
          <a href="#" className="text-gray-300 hover:text-white">
            Users
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
