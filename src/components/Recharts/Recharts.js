import React, { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Recharts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Manth Wise Sell</h1>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Recharts;
