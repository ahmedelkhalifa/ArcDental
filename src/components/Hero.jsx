import { Box, Button } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import img from "../assets/heroImg.png";
import { CalendarMonthOutlined, East } from "@mui/icons-material";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, pl: 10, pr: 4 }}>
          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            ARC DENTAL . MODERN DENTAL CLINIC
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 500,
              fontSize: "60px",
              mt: 3,
              color: "text.main",
            }}
          >
            Healthy Smiles,
            <br />
            Modern Treatments
            <Typography
              variant="h1"
              sx={{
                fontWeight: 500,
                fontSize: "60px",
                color: "primary.main",
                display: "inline",
              }}
            >
              .
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 3, color: "text.secondary" }}>
            With the latest technical equipments and expert dentists,
            <br />
            We offer trust worthy treatments for mouth and teeth.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                height: "50px",
                width: "150px",
                bgcolor: "primary.main",
                color: "background.default",
                fontSize: 14,
                fontWeight: 400,
              }}
              startIcon={<CalendarMonthOutlined />}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                height: "50px",
                width: "200px",
                borderColor: "primary.main",
                color: "primary.main",
                fontSize: 14,
                fontWeight: 500,
              }}
              startIcon={<East />}
            >
              Our Services
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1.3,
            height: "100%",
            width: "100%",
            overflow: "hidden",
            position: "relative",

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              background:
                "linear-gradient(to right, rgba(248,250,252,1) 0%, rgba(248,250,252,0) 30%)",

              zIndex: 1,
            },
          }}
        >
          <Box
            component={"img"}
            src={img}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
