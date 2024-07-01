export const columns = [
  { field: "id", headerName: "ID", width: 33 },
  { field: "registrarID", headerName: "Regidtrar ID" },
  {
    field: "name",
    headerName: " Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
    width: 33,
  },
  { field: "phone", headerName: "Phone Number", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "zipCode", headerName: "Zip Code" },
];

export const rows = [
  {
    id: 1,
    name: "rachid",
    email: "rachid@gmail.com",
    age: 27,
    phone: "(124)4578798",
    address: "0912 Wom Street, Albama, SY10001",
    city: "New York",
    zipCode: "10001",
    registrarID: 12345,
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 35,
    phone: "(234)5678901",
    address: "456 Oak Avenue, California, CA90210",
    city: "Los Angeles",
    zipCode: "90210",
    registrarID: 23456,
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    age: 42,
    phone: "(345)6789012",
    address: "789 Pine Road, Texas, TX77001",
    city: "Houston",
    zipCode: "77001",
    registrarID: 34567,
  },
  {
    id: 4,
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    age: 29,
    phone: "(456)7890123",
    address: "321 Maple Street, Florida, FL33000",
    city: "Miami",
    zipCode: "33000",
    registrarID: 45678,
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    age: 38,
    phone: "(567)8901234",
    address: "654 Elm Boulevard, Illinois, IL60001",
    city: "Chicago",
    zipCode: "60001",
    registrarID: 56789,
  },
  {
    id: 6,
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    age: 25,
    phone: "(678)9012345",
    address: "987 Birch Lane, Washington, WA98001",
    city: "Seattle",
    zipCode: "98001",
    registrarID: 67890,
  },
  {
    id: 7,
    name: "Daniel Miller",
    email: "daniel.miller@example.com",
    age: 45,
    phone: "(789)0123456",
    address: "123 Cedar Road, Arizona, AZ85001",
    city: "Phoenix",
    zipCode: "85001",
    registrarID: 78901,
  },
  {
    id: 8,
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    age: 32,
    phone: "(890)1234567",
    address: "456 Pine Lane, Colorado, CO72000",
    city: "Denver",
    zipCode: "72000",
    registrarID: 89012,
  },
  {
    id: 9,
    name: "James Davis",
    email: "james.davis@example.com",
    age: 31,
    phone: "(901)2345678",
    address: "789 Oak Street, Nevada, NV89001",
    city: "Las Vegas",
    zipCode: "89001",
    registrarID: 90123,
  },
  {
    id: 10,
    name: "Emily Taylor",
    email: "emily.taylor@example.com",
    age: 28,
    phone: "(012)3456789",
    address: "321 Cedar Avenue, Oregon, OR97000",
    city: "Portland",
    zipCode: "97000",
    registrarID: 10111,
  },
  {
    id: 11,
    name: "Liam Martinez",
    email: "liam.martinez@example.com",
    age: 33,
    phone: "(123)4567890",
    address: "654 Maple Road, Massachusetts, MA02000",
    city: "Boston",
    zipCode: "02000",
    registrarID: 11122,
  },
];

console.log(rows);
