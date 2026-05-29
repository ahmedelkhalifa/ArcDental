import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo2.png";
import { CalendarMonthOutlined, Menu } from "@mui/icons-material";

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
          px: { xs: 2, md: 5 },
          py: 5
        }}
      >
        <Box>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: { xs: "40px", md: "50px" } }}
          />
          {/* <Typography
            variant="h5"
            sx={{ color: "primary.main", fontWeight: 600, fontSize: "35px" }}
          >
            Arc Dental
          </Typography> */}
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
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
                bottom: "-10px",
              },
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              height: "40px",
              width: { xs: "130px", md: "150px" },
              bgcolor: "primary.main",
              color: "background.paper",
              fontSize: "12px",
            }}
            startIcon={<CalendarMonthOutlined fontSize="small" />}
          >
            Book Now
          </Button>
          <IconButton
            sx={{
              display: {
                xs: "flex",
                md: "none",
                color: "text.primary",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Menu sx={{color: "text.primary"}}></Menu>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Nav;
