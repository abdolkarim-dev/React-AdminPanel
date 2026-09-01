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

const data = [
  { month: "Jan", revenue: 1200, users: 400 },
  { month: "Feb", revenue: 1800, users: 600 },
  { month: "Mar", revenue: 1500, users: 500 },
  { month: "Apr", revenue: 2400, users: 800 },
  { month: "May", revenue: 3000, users: 1000 },
];

export default function BarChartOne() {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
          <YAxis tick={{ fill: "#6b7280" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar
            dataKey="revenue"
            fill="#22c55e"
            radius={[4, 4, 0, 0]}
            name="Revenue"
          />
          <Bar
            dataKey="users"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            name="Users"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
