import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import { CalendarMonthOutlined } from "@mui/icons-material";

const Nav = (props) => {
  return (
    <>
      <Box
        sx={{
          position: "static",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          backgroundColor: "background.paper",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 999,
          p: 5,
        }}
      >
        <Box>
          {/* <Box component="img" src={logo} alt="Logo" sx={{ height: "200px" }} /> */}
          <Typography
            variant="h5"
            sx={{ color: "primary.main", fontWeight: 600, fontSize: "35px" }}
          >
            Arc Dental
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography
            variant="body1"
            sx={{
              color: props.active === "home" ? "primary.main" : "text.primary",
              fontWeight: props.active === "home" ? 600 : 400,
              position: "relative",
              "&::after": {
                content: '""',
                display: props.active === "home" ? "block" : "none",
                width: "100%",
                height: "2px",
                bgcolor: "primary.main",
                position: "absolute",
                left: 0,
                bottom: "-10px"
              }
            }}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:
                props.active === "services" ? "primary.main" : "text.primary",
            }}
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: props.active === "about" ? "primary.main" : "text.primary",
            }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:
                props.active === "contact" ? "primary.main" : "text.primary",
            }}
          >
            Contact
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              height: "50px",
              width: "150px",
              bgcolor: "primary.main",
              color: "background.paper",
              fontSize: "14px",
            }}
            startIcon={<CalendarMonthOutlined />}
          >
            Appointment
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Nav;
