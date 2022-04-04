import React from "react";
import AreaChart from "../AreaChart/AreaChart";
import BarChart from "../BarChart/BarChart";
import PaiChart from "../PaiChart/PaiChart";
import Recharts from "../Recharts/Recharts";

const Dashboard = () => {
  return (
    <div>
      <p>this is dashbord for showing rechart</p>
      <Recharts></Recharts>
      <AreaChart></AreaChart>
      <BarChart></BarChart>
      <PaiChart></PaiChart>
    </div>
  );
};

export default Dashboard;
