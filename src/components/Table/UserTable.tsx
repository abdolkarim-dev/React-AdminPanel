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
    <div className=" overflow-hidden rounded-xl border border-gray-200 bg-white  ">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 ">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-500 text-start   "
              >
                User
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-500 text-start  "
              >
                Email
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-500 text-start  "
              >
                Role
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-500 text-start  "
              >
                Department
              </TableCell>

              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-500 text-start  "
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100  ">
            {tableData.map((user) => (
              <TableRow key={user.id}>
                {/* User */}
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center  gap-2">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={user.image}
                        alt={user.name}
                      />
                    </div>
                     <span className="block font-medium text-gray-800 text-theme-sm  ">
                      {user.name}
                    </span>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm ">
                  {user.email}
                </TableCell>

                {/* Role */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm ">
                  {user.role}
                </TableCell>

                {/* Department */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm ">
                  {user.department}
                </TableCell>

                {/* Status */}
                <TableCell className="px-4 py-3 text-start">
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
