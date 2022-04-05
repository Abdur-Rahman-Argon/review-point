import React from "react";
import { Pie, PieChart } from "recharts";
import { Tooltip } from "recharts";

const PaiChart = (props) => {
  return (
    <div>
      <h1 className="text-3xl">Investment Vs Revenue (In PaiChart)</h1>
      <PieChart width={500} height={250}>
        <Pie
          data={props.data}
          dataKey="investment"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={props.data}
          dataKey="revenue"
          nameKey="month"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PaiChart;
