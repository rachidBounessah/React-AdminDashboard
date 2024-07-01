import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <TextField sx={{ flex: 1 }} label="First Name" variant="filled" />
        <TextField sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>

      <TextField label="Email" variant="filled" />
      <TextField label="Contact Number" variant="filled" />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Creat New User
        </Button>
      </Box>
    </Box>
  );
}
