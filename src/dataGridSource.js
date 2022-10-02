export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "username",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImage">
          <img className="cellImage" src={params.row.img} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Aditya Nautiyal",
    email: "aditya@gmail.com",
    status: "Active",
    age: 21,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Harsh Negi",
    email: "harsh@gmail.com",
    status: "Passive",
    age: 20,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Madhur Tyagi",
    email: "madhur@gmail.com",
    status: "Pending",
    age: "20",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Vansh Yadav",
    email: "vansh@gmail.com",
    status: "Active",
    age: 25,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Akshay Raghunath",
    email: "akshay@gmail.com",
    status: "Passive",
    age: 35,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Rahul Goyal",
    email: "rahul@gmail.om",
    status: "Pending",
    age: 53,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Kavya Gupta",
    email: "kavya@gmail.om",
    status: "Pending",
    age: 21,
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Vrinda Kaul",
    email: "vrinda@gmail.om",
    status: "Passive",
    age: 21,
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Disha Verma",
    email: "disha@gmail.om",
    status: "Active",
    age: 22,
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Neha Taneja",
    email: "neha@gmail.om",
    status: "Active",
    age: 21,
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    username: "Vanshika",
    email: "vanshika@gmail.om",
    status: "Pending",
    age: 22,
  },
];
