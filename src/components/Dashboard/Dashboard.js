import React, { useEffect, useState } from "react";
import AreaRecharts from "../AreaRecharts/AreaRecharts";
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
        <AreaRecharts className="my-4" data={data}></AreaRecharts>
        <BarChart className="my-4" data={data}></BarChart>
        <PaiChart className="my-4" data={data}></PaiChart>
      </div>
    </div>
  );
};

export default Dashboard;
