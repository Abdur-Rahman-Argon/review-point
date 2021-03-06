import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Recharts = (props) => {
  const { month, investment, sell, revenue } = props.data;
  return (
    <div>
      <h1 className="text-3xl m-4 ">Manth Wise Sell(in LineChart)</h1>
      <LineChart
        width={500}
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

export default Recharts;
