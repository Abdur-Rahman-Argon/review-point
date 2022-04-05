import React, { useEffect, useState } from "react";
import AreaRecharts from "../AreaRecharts/AreaRecharts";
import BarChart from "../BarRecharts/BarRecharts";
import PaiChart from "../PaiRechart/PaiRechart";
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
      <div className="md:grid md:grid-cols-2 gap-20 m-5 p-10">
        <Recharts className="my-8 p-5" data={data}></Recharts>
        <AreaRecharts className="my-8 p-5" data={data}></AreaRecharts>
        <BarChart className="my-8 p-5" data={data}></BarChart>
        <PaiChart className="my-8 p-5" data={data}></PaiChart>
      </div>
    </div>
  );
};

export default Dashboard;
