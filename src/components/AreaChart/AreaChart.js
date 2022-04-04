import React, { useEffect, useState } from "react";
import { LineChart } from "recharts";
import { Line } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { Tooltip } from "recharts";

const AreaChart = (props) => {
  return (
    <div>
      <h1 className="text-3xl">Investment Vs Revenue(in AreaChart)</h1>
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

export default AreaChart;
