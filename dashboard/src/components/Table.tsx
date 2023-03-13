import { FC, useEffect, useState } from "react";

interface TableProps {
  data: any[];
}

const Table: FC<TableProps> = ({ data }) => {
  const [scooters, setScooters] = useState([]);
  useEffect(() => {
    const fetchScooters = async () => {
      const response = await fetch("http://localhost:6000/api/scooter/getScooter");
      const data = await response.json();
      setScooters(data);
    };
    fetchScooters();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Lantitude</th>
            <th className="px-4 py-2">Langitude</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {scooters.map((scooter, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{scooter.id}</td>
              <td className="border px-4 py-2">{scooter.nom}</td>
              <td className="border px-4 py-2">{scooter.latitude}</td>
              <td className="border px-4 py-2">{scooter.longitude}</td>
              <td className="border px-4 py-2">{scooter.description}</td>
              <td className="border px-4 py-2">{scooter.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
