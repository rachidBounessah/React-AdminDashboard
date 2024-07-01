export const columns = [
  { field: "id", headerName: "ID", width: 33 },
  {
    field: "name",
    headerName: " Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },

  { field: "phone", headerName: "Phone Number", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "cost", headerName: "Cost", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
];

export const rows = [
  {
    id: 1,
    name: "Rachid",
    email: "rachid@gmail.com",
    age: 27,
    phone: "(124) 457-8798",
    cost: "250$",
    date: "22-05-2024",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 35,
    phone: "(234) 567-8901",
    cost: "300$",
    date: "15-06-2024",
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    age: 42,
    phone: "(345) 678-9012",
    cost: "200$",
    date: "10-05-2024",
  },
  {
    id: 4,
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    age: 29,
    phone: "(456) 789-0123",
    cost: "400$",
    date: "18-06-2024",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    age: 38,
    phone: "(567) 890-1234",
    cost: "350$",
    date: "25-05-2024",
  },
];
