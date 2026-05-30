import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";
import { CalendarMonthOutlined, East } from "@mui/icons-material";
import generalDentistryImg from "../assets/services/service1.webp";
import { FaTooth } from "react-icons/fa";

const Services = () => {
  const services = [{
    "title": "General Dentistry",
    "desc": "Routine check-ups, cleaning, and preventive care to maintain your oral health",
    "img": generalDentistryImg,
    "icon":  
  }]
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "accent.main",
                fontWeight: 600,
                letterSpacing: "2px",
                fontSize: 16,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "70px",
                  height: "2px",
                  bgcolor: "accent.main",
                },
              }}
            >
              OUR SERVICES
            </Typography>
            <Typography
              variant="h1"
              sx={{ textAlign: "center", fontSize: 48, fontWeight: 500 }}
            >
              Comprehensive Dental Care
              <br />
              for a Healthier You
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              We combine advanced technology with patient-centered approch
              <br />
              to deliver outsanding dental care in comfortable environment
            </Typography>
          </Box>
          <Grid container sx={{ mt: 3 }} spacing={2}>
            {services.map((_, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <ServiceCard />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              justifyContent: "space-between",
              alignItems: {xs: "flex-start", md: "center"},
              bgcolor: "accent.surface",
              mt: 3,
              borderRadius: 5,
              p: 3
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  color: "background.default",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CalendarMonthOutlined />
              </Box>
              <Box sx={{flex: 1}}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, fontSize: 16, color: "text.primary" }}
                >
                  Book Your Appointment
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, fontSize: 14, color: "text.secondary" }}
                >
                  Take the first step toward a healthier smile
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                height: "40px",
                width: "200px",
                bgcolor: "primary.main",
                color: "background.default",
                fontSize: 12,
                mt: {xs:3, md:0}
              }}
              endIcon={<East />}
            >
              Book an Appointment
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Services;
