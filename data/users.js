import bcrypt from "bcryptjs";
const Users = [
  {
    name: "Mahesh Jangid",
    email: "mahesh1@gmail.com",
    password: bcrypt.hashSync("1234", 12),
    isAdmin: false,
  },
  {
    name: "Guru",
    email: "guru@gmail.com",
    password: bcrypt.hashSync("1234", 12),
    isAdmin: false,
  },
  {
    name: "Ravi",
    email: "ravi@gmail.com",
    password: bcrypt.hashSync("123456", 12),
    isAdmin: false,
  },
  {
    name: "Dev Ed",
    email: "deved@gmail.com",
    password: bcrypt.hashSync("dev12", 12),
    isAdmin: false,
  },
];
export default Users;
