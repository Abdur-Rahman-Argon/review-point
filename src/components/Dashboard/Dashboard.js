import React from "react";
import AreaChart from "../AreaChart/AreaChart";
import Recharts from "../Recharts/Recharts";

const Dashboard = () => {
  return (
    <div>
      <p>this is dashbord for showing rechart</p>
      <Recharts></Recharts>
      <AreaChart></AreaChart>
    </div>
  );
};

export default Dashboard;
