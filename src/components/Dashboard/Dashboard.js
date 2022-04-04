import React, { useEffect, useState } from "react";
import AreaChart from "../AreaChart/AreaChart";
import BarChart from "../BarChart/BarChart";
import PaiChart from "../PaiChart/PaiChart";
import Recharts from "../Recharts/Recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="md:grid md:grid-cols-2 m-5">
        <Recharts className="my-4" data={data}></Recharts>
        <AreaChart className="my-4"></AreaChart>
        <BarChart className="my-4"></BarChart>
        <PaiChart className="my-4"></PaiChart>
      </div>
    </div>
  );
};

export default Dashboard;
