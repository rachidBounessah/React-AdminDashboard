import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",

      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              marginY: "9px",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              marginLeft: "auto",
              marginRight: "auto",

              backgroundColor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "white" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "white" }} fontSize="small" />
            )}
            {access === "user" && (
              <LockOpenOutlined sx={{ color: "white" }} fontSize="small" />
            )}
            {/* {access === "admin" ? (
              <AdminPanelSettingsOutlined fontSize="small" />
            ) : access === "user" ? (
              <LockOpenOutlined />
            ) : (
              <SecurityOutlined />
            )} */}

            <Typography
              sx={{ fontSize: "13px", color: "white" }}
              variant="body1"
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 300,
        width: "98%",
        mx: "auto",
      }}
    >
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
