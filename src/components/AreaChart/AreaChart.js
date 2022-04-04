import React, { useEffect, useState } from "react";

const AreaChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl">Investment Vs Revenue(in AreaChart)</h1>
    </div>
  );
};

export default AreaChart;