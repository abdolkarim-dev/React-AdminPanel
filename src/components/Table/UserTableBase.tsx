import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const users = [
  {
    id: 1,
    name: "Ali Ahmadi",
    email: "ali@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Reza Mohammadi",
    email: "reza@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Sara Hosseini",
    email: "sara@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mehdi Karimi",
    email: "mehdi@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Nima Ahmadi",
    email: "nima@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 6,
    name: "Maryam Rezaei",
    email: "maryam@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Hassan Moradi",
    email: "hassan@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 8,
    name: "Sara Ahmadi",
    email: "sara.a@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 9,
    name: "Omid Karimi",
    email: "omid@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Reza Ahmadi",
    email: "reza.a@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 11,
    name: "Amir Hosseini",
    email: "amir@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 12,
    name: "Mina Mohammadi",
    email: "mina@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 13,
    name: "Arman Karimi",
    email: "arman@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 14,
    name: "Fatemeh Ahmadi",
    email: "fatemeh@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 15,
    name: "Pouya Rezaei",
    email: "pouya@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 16,
    name: "Zahra Moradi",
    email: "zahra@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 17,
    name: "Sina Hosseini",
    email: "sina@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 18,
    name: "Elham Karimi",
    email: "elham@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Mohammad Rezaei",
    email: "mohammad@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 20,
    name: "Yasin Ahmadi",
    email: "yasin@example.com",
    role: "Editor",
    status: "Active",
  },
];

export default function UsersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>ID</TableCell>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Email</TableCell>
          <TableCell isHeader>Role</TableCell>
          <TableCell isHeader>Status</TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <span
                className={
                  user.status === "Active"
                    ? "text-success-500"
                    : "text-error-500"
                }
              >
                {user.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}