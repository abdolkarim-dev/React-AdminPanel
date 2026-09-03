import ComponentDiv from "@/components/common/componentDiv";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 5100 },
  { month: "Apr", revenue: 7200 },
  { month: "May", revenue: 6800 },
  { month: "Jun", revenue: 8900 },
  { month: "Jul", revenue: 8200 },
  { month: "Aug", revenue: 10400 },
  { month: "Sep", revenue: 9800 },
  { month: "Oct", revenue: 11800 },
  { month: "Nov", revenue: 12600 },
  { month: "Dec", revenue: 14200 },
];

const weeklyOrders = [
  { day: "Mon", orders: 42 },
  { day: "Tue", orders: 58 },
  { day: "Wed", orders: 46 },
  { day: "Thu", orders: 71 },
  { day: "Fri", orders: 64 },
  { day: "Sat", orders: 82 },
  { day: "Sun", orders: 68 },
];

const transactions = [
  {
    id: "#TRX-8492",
    name: "Alex Johnson",
    email: "alex@example.com",
    amount: "$2,450",
    status: "Completed",
  },
  {
    id: "#TRX-8491",
    name: "Emma Wilson",
    email: "emma@example.com",
    amount: "$890",
    status: "Pending",
  },
  {
    id: "#TRX-8490",
    name: "Daniel Smith",
    email: "daniel@example.com",
    amount: "$1,240",
    status: "Completed",
  },
  {
    id: "#TRX-8489",
    name: "Sophia Brown",
    email: "sophia@example.com",
    amount: "$640",
    status: "Processing",
  },
  {
    id: "#TRX-8488",
    name: "James Miller",
    email: "james@example.com",
    amount: "$3,120",
    status: "Completed",
  },
];

const activities = [
  {
    title: "New customer registered",
    description: "Emma Wilson created an account",
    time: "8 min ago",
    icon: "👤",
  },
  {
    title: "Payment received",
    description: "Payment #TRX-8492 was completed",
    time: "24 min ago",
    icon: "💳",
  },
  {
    title: "New order placed",
    description: "Order #ORD-3291 has been received",
    time: "41 min ago",
    icon: "🛍️",
  },
  {
    title: "Product updated",
    description: "MacBook Pro inventory was updated",
    time: "1 hour ago",
    icon: "📦",
  },
];

function StatCard({
  title,
  value,
  change,
  icon,
  description,
}: {
  title: string;
  value: string;
  change: string;
  icon: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        group rounded-2xl border border-brand-100
        bg-white p-5 shadow-sm
        transition-shadow hover:shadow-md
        dark:border-gray-800 dark:bg-gray-900
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            flex h-11 w-11 items-center justify-center
            rounded-xl bg-brand-50 text-xl
            ring-1 ring-brand-100
            dark:bg-brand-950/40 dark:ring-brand-900
          "
        >
          {icon}
        </div>

        <span
          className="
            rounded-full bg-emerald-50 px-2.5 py-1
            text-xs font-semibold text-emerald-600
            dark:bg-emerald-500/10 dark:text-emerald-400
          "
        >
          {change}
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
        {value}
      </h3>

      <p className="mt-1 text-xs text-gray-400">{description}</p>
    </motion.div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-2xl border border-brand-100
        bg-white shadow-sm
        dark:border-gray-800 dark:bg-gray-900
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-base font-bold text-gray-800 dark:text-white">
          {title}
        </h2>

        <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
      </div>

      <button
        className="
          rounded-lg border border-gray-200
          px-3 py-1.5 text-xs font-medium
          text-gray-500 transition
          hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600
          dark:border-gray-700 dark:text-gray-400
          dark:hover:bg-brand-950/30
        "
      >
        View all
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen mt-14 lg:mt-0  p-4 sm:p-6 lg:p-8 dark:bg-gray-950">
      {/* Header */}
      <div className="mb-7 flex flex-col gap-4 bg-white rounded-2xl px-6 py-3 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-500" />

            <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
              Overview
            </span>
          </div>

          <h1 className="mt-1 text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
            Good morning, Admin 👋
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="
              rounded-xl border border-brand-100
              bg-white px-4 py-2.5 text-sm font-medium
              text-gray-600 shadow-sm transition
              hover:border-brand-200 hover:bg-brand-50
              dark:border-gray-800 dark:bg-gray-900
              dark:text-gray-300
            "
          >
            Export
          </button>

          <button
            className="
              rounded-xl bg-brand-500 px-4 py-2.5
              text-sm font-semibold text-white
              shadow-sm shadow-brand-500/20
              transition hover:bg-brand-600
            "
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$124,580"
          change="+12.5%"
          icon="💰"
          description="Compared with last month"
        />

        <StatCard
          title="Total Customers"
          value="24,892"
          change="+8.2%"
          icon="👥"
          description="1,248 new this month"
        />

        <StatCard
          title="Total Orders"
          value="8,549"
          change="+14.8%"
          icon="🛍️"
          description="342 orders this week"
        />

        <StatCard
          title="Conversion Rate"
          value="6.84%"
          change="+2.1%"
          icon="🎯"
          description="Compared with last month"
        />
      </div>

      {/* Main Charts */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Revenue */}
        <Card className="p-5 xl:col-span-2">
          <CardHeader
            title="Revenue Analytics"
            subtitle="Your revenue performance over the year"
          />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">
                $124,580
              </p>

              <p className="mt-1 text-xs text-emerald-500">
                ↗ 12.5% from last month
              </p>
            </div>

            <div className="flex rounded-lg bg-brand-50 p-1 dark:bg-gray-800">
              <button className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-sm dark:bg-gray-700 dark:text-brand-400">
                Revenue
              </button>

              <button className="px-3 py-1.5 text-xs font-medium text-gray-400">
                Orders
              </button>
            </div>
          </div>

          <div className="mt-5 h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="blueRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#465fff" stopOpacity={0.22} />

                    <stop offset="100%" stopColor="#465fff" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#eef2ff"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#98a2b3" }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#98a2b3" }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #dde9ff",
                    boxShadow: "0 8px 25px rgba(38,46,137,0.08)",
                  }}
                  formatter={(value) => [`$${value}`, "Revenue"]}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#465fff"
                  strokeWidth={3}
                  fill="url(#blueRevenue)"
                  activeDot={{
                    r: 6,
                    strokeWidth: 3,
                    stroke: "#fff",
                    fill: "#465fff",
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Target */}
        <Card className="p-5">
          <CardHeader title="Sales Target" subtitle="Monthly sales progress" />

          <div className="mt-7 flex justify-center">
            <div className="relative h-52 w-52">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 220 220">
                <circle
                  cx="110"
                  cy="110"
                  r="86"
                  fill="none"
                  stroke="#ecf3ff"
                  strokeWidth="16"
                />

                <circle
                  cx="110"
                  cy="110"
                  r="86"
                  fill="none"
                  stroke="#465fff"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeDasharray="540"
                  strokeDashoffset="108"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-gray-800 dark:text-white">
                  80%
                </span>

                <span className="mt-1 text-xs text-gray-400">Completed</span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Monthly Target</span>

              <span className="text-sm font-bold text-gray-800 dark:text-white">
                $150,000
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Current Sales</span>

              <span className="text-sm font-bold text-brand-500">$120,000</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-brand-50 dark:bg-gray-800">
              <div className="h-full w-[80%] rounded-full bg-brand-500" />
            </div>
          </div>
        </Card>
      </div>

      {/* Second Row */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Orders */}
        <Card className="p-5 lg:col-span-3">
          <CardHeader
            title="Weekly Orders"
            subtitle="Orders received during this week"
          />

          <div className="mt-5 h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyOrders} barCategoryGap="35%">
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#eef2ff"
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#98a2b3" }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#98a2b3" }}
                />

                <Tooltip
                  cursor={{ fill: "#f2f7ff" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #dde9ff",
                  }}
                />

                <Bar dataKey="orders" fill="#7592ff" radius={[7, 7, 3, 3]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Performance */}
        <Card className="p-5 lg:col-span-2">
          <CardHeader
            title="Performance"
            subtitle="Business performance this month"
          />

          <div className="mt-7 space-y-6">
            {[
              {
                title: "Revenue",
                value: "82%",
                progress: "82%",
              },
              {
                title: "Orders",
                value: "74%",
                progress: "74%",
              },
              {
                title: "Customers",
                value: "91%",
                progress: "91%",
              },
              {
                title: "Retention",
                value: "68%",
                progress: "68%",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {item.title}
                  </span>

                  <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                    {item.value}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-brand-50 dark:bg-gray-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.progress }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-brand-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-xl bg-brand-50 p-4 dark:bg-brand-950/30">
            <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">
              Excellent performance 🎉
            </p>

            <p className="mt-1 text-xs leading-5 text-brand-600/70 dark:text-brand-400/70">
              Your business is performing better than 87% of the previous
              months.
            </p>
          </div>
        </Card>
      </div>

      {/* Bottom */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Transactions */}
        <Card className="overflow-hidden xl:col-span-2">
          <div className="p-5">
            <CardHeader
              title="Recent Transactions"
              subtitle="Latest payments and orders"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-y border-brand-50 bg-brand-25 dark:border-gray-800 dark:bg-gray-800/40">
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400">
                    Customer
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400">
                    ID
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400">
                    Amount
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="
                      border-b border-gray-100
                      transition hover:bg-brand-25
                      dark:border-gray-800 dark:hover:bg-gray-800/40
                    "
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex h-9 w-9 items-center justify-center
                            rounded-full bg-brand-100
                            text-xs font-bold text-brand-600
                            dark:bg-brand-950 dark:text-brand-300
                          "
                        >
                          {transaction.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            {transaction.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            {transaction.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-500">
                      {transaction.id}
                    </td>

                    <td className="px-5 py-4 text-sm font-bold text-gray-700 dark:text-gray-200">
                      {transaction.amount}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`
                          rounded-full px-2.5 py-1 text-xs font-semibold
                          ${
                            transaction.status === "Completed"
                              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                              : transaction.status === "Pending"
                                ? "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"
                                : "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                          }
                        `}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Activity */}
        <Card className="p-5">
          <CardHeader title="Recent Activity" subtitle="Latest updates" />

          <div className="mt-6 space-y-6">
            {activities.map((activity, index) => (
              <div key={activity.title} className="flex gap-3">
                <div className="relative">
                  <div
                    className="
                      flex h-10 w-10 shrink-0 items-center
                      justify-center rounded-xl
                      bg-brand-50 text-lg
                      dark:bg-brand-950/40
                    "
                  >
                    {activity.icon}
                  </div>

                  {index !== activities.length - 1 && (
                    <div className="absolute left-1/2 top-11 h-7 w-px -translate-x-1/2 bg-brand-100 dark:bg-gray-800" />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    {activity.description}
                  </p>

                  <p className="mt-1 text-[11px] text-brand-500">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="
              mt-7 w-full rounded-xl
              border border-brand-100 bg-brand-25
              py-2.5 text-sm font-semibold
              text-brand-600 transition
              hover:bg-brand-50
              dark:border-gray-800 dark:bg-gray-800
              dark:text-brand-400
            "
          >
            View Activity
          </button>
        </Card>
      </div>
    </div>
  );
}
