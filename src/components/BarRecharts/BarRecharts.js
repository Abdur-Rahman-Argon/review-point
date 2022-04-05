import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarRecharts = (props) => {
  return (
    <div>
      <h1 className="text-3xl">Investment Vs Revenue(in BarChart)</h1>
      <BarChart width={500} height={250} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarRecharts;
