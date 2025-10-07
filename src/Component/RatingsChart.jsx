import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={ratings}
          margin={{
            top: 5,
            right: 30,
            left: -10,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis type="number" dataKey="count" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
