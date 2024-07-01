import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { columns, rows } from "./data";

export default function Contacts() {
  return (
    <Box
      sx={{
        height: 600,
        width: "98%",
        mx: "auto",
      }}
    >
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
