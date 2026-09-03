import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Pending" | "Inactive";
  department: string;
  image?: string;
}

const tableData: User[] = [
  {
    id: 1,
    name: "Ali Ahmadi",
    email: "ali@example.com",
    role: "Admin",
    status: "Active",
    department: "IT",
    image: "/images/user/user-01.jpg",
  },
  {
    id: 2,
    name: "Reza Mohammadi",
    email: "reza@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-02.jpg",
  },
  {
    id: 3,
    name: "Sara Hosseini",
    email: "sara@example.com",
    role: "Designer",
    status: "Pending",
    department: "Design",
    image: "/images/user/user-03.jpg",
  },
  {
    id: 4,
    name: "Mehdi Karimi",
    email: "mehdi@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-04.jpg",
  },
  {
    id: 5,
    name: "Nima Ahmadi",
    email: "nima@example.com",
    role: "Manager",
    status: "Active",
    department: "Management",
    image: "/images/user/user-05.jpg",
  },
  {
    id: 6,
    name: "Maryam Rezaei",
    email: "maryam@example.com",
    role: "Designer",
    status: "Inactive",
    department: "Design",
    image: "/images/user/user-06.jpg",
  },
  {
    id: 7,
    name: "Hassan Moradi",
    email: "hassan@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-07.jpg",
  },
  {
    id: 8,
    name: "Sara Ahmadi",
    email: "sara.a@example.com",
    role: "HR",
    status: "Active",
    department: "Human Resources",
    image: "/images/user/user-08.jpg",
  },
  {
    id: 9,
    name: "Omid Karimi",
    email: "omid@example.com",
    role: "Admin",
    status: "Inactive",
    department: "IT",
    image: "/images/user/user-09.jpg",
  },
  {
    id: 10,
    name: "Reza Ahmadi",
    email: "reza.a@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-10.jpg",
  },
  {
    id: 11,
    name: "Amir Hosseini",
    email: "amir@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-11.jpg",
  },
  {
    id: 12,
    name: "Mina Mohammadi",
    email: "mina@example.com",
    role: "Designer",
    status: "Pending",
    department: "Design",
    image: "/images/user/user-12.jpg",
  },
  {
    id: 13,
    name: "Arman Karimi",
    email: "arman@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-13.jpg",
  },
  {
    id: 14,
    name: "Fatemeh Ahmadi",
    email: "fatemeh@example.com",
    role: "Manager",
    status: "Active",
    department: "Management",
    image: "/images/user/user-14.jpg",
  },
  {
    id: 15,
    name: "Pouya Rezaei",
    email: "pouya@example.com",
    role: "Developer",
    status: "Inactive",
    department: "Development",
    image: "/images/user/user-15.jpg",
  },
  {
    id: 16,
    name: "Zahra Moradi",
    email: "zahra@example.com",
    role: "Designer",
    status: "Active",
    department: "Design",
    image: "/images/user/user-16.jpg",
  },
  {
    id: 17,
    name: "Sina Hosseini",
    email: "sina@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-17.jpg",
  },
  {
    id: 18,
    name: "Elham Karimi",
    email: "elham@example.com",
    role: "Admin",
    status: "Pending",
    department: "IT",
    image: "/images/user/user-18.jpg",
  },
  {
    id: 19,
    name: "Mohammad Rezaei",
    email: "mohammad@example.com",
    role: "Developer",
    status: "Active",
    department: "Development",
    image: "/images/user/user-19.jpg",
  },
  {
    id: 20,
    name: "Yasin Ahmadi",
    email: "yasin@example.com",
    role: "HR",
    status: "Active",
    department: "Human Resources",
    image: "/images/user/user-20.jpg",
  },
];

export default function UsersTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Table Header / Top Bar */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-gray-800">
        <div>
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">
            Users
          </h3>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage and view all users in your organization
          </p>
        </div>

        <div className="hidden rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 sm:block dark:bg-gray-800 dark:text-gray-300">
          {tableData.length} Users
        </div>
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <Table className="min-w-[900px]">
          {/* Header */}
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              <TableCell
                isHeader
                className="px-6 py-4 text-left text-xs font-semibold text-gray-400"
              >
                User
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-4 text-left text-xs font-semibold text-gray-400"
              >
                Email
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-4 text-left text-xs font-semibold text-gray-400"
              >
                Role
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-4 text-left text-xs font-semibold text-gray-400"
              >
                Department
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-4 text-left text-xs font-semibold text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((user) => (
              <TableRow
                key={user.id}
                className="group transition-all duration-200 hover:bg-gray-50/80 dark:hover:bg-gray-800/30"
              >
                {/* User */}
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar */}
                    <div className="relative h-11 w-11 shrink-0">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="h-11 w-11 rounded-full object-cover ring-1 ring-gray-200 dark:ring-gray-700"
                      />

                      {/* Online indicator */}
                      {user.status === "Active" && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-gray-900" />
                      )}
                    </div>

                    {/* Name */}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-800 dark:text-white">
                        {user.name}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        User #{user.id}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell className="px-5 py-5">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {user.email}
                  </span>
                </TableCell>

                {/* Role */}
                <TableCell className="px-5 py-5">
                  <span className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {user.role}
                  </span>
                </TableCell>

                {/* Department */}
                <TableCell className="px-5 py-5">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {user.department}
                  </span>
                </TableCell>

                {/* Status */}
                <TableCell className="px-5 py-5">
                  <div className="flex items-center">
                    <Badge
                      size="sm"
                      color={
                        user.status === "Active"
                          ? "success"
                          : user.status === "Pending"
                            ? "warning"
                            : "error"
                      }
                    >
                      {user.status}
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 dark:border-gray-800">
        <p className="text-xs text-gray-400">
          Showing {tableData.length} users
        </p>

        <button
          type="button"
          className="text-xs font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          View all →
        </button>
      </div>
    </div>
  );
}
