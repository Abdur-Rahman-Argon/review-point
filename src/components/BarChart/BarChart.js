import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const BarChart = (props) => {
  return (
    <div>
      <h1 className="text-3xl">Investment Vs Revenue(in BarChart)</h1>
      <LineChart
        width={600}
        height={300}
        data={props.data}
        margin={{ top: 5, right: 20, bottom: 5, left: 2 }}
      >
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />

        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default BarChart;
