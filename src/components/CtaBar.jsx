import { CalendarMonthOutlined, East } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import heroImg from "../assets/heroImg.webp";

const CtaBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
        px: 6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: "accent.main",
        backgroundImage: `
            linear-gradient(
    to right,
    rgba(14, 58, 138, 0.9) 0%,
    rgba(14, 58, 138, 0.8) 70%,
    rgba(14, 58, 138, 0.7) 85%,
    rgba(14, 58, 138, 5) 100%
  ),
      url(${heroImg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        mt: 8,
        overflow: "hidden",
        borderRadius: 2,
        gap: 4
      }}
    >
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            width: "70px",
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            bgcolor: "accent.surface",
            color: "primary.main",
          }}
        >
          <CalendarMonthOutlined fontSize="large" />
        </Box>
        <Box sx={{flex: 1}}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "24px",
              color: "background.default",
              fontWeight: 400,
            }}
          >
            Ready to restore your smile?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              color: "background.default",
              fontWeight: 400,
              mt: 1,
            }}
          >
            Schedule your consultation with our specialist today.
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          bgcolor: "background.default",
          color: "primary.main",
          "&:hover": { bgcolor: "background.default" },
          width: "250px",
          fontSize: "16px",
        }}
        endIcon={<East />}
      >
        Book Appointment
      </Button>
    </Box>
  );
};

export default CtaBar;
