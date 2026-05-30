import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";
import { AutoAwesomeOutlined, CalendarMonthOutlined, East } from "@mui/icons-material";
import generalDentistryImg from "../assets/services/service1.webp";
import dentalImplantImg from "../assets/services/service2.webp";
import orthodontics from "../assets/services/service3.webp";
import cosmeticDentistryImg from "../assets/services/service4.webp";
import rootCanalImg from "../assets/services/service5.webp";
import periodontalImg from "../assets/services/service6.webp";
import oralSurgeryImg from "../assets/services/service7.webp";
import digitalImg from "../assets/services/service8.webp";
import { FaTooth  } from "react-icons/fa";
import { GiAncientScrew } from "react-icons/gi";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { TbDental } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiQrScan2Line } from "react-icons/ri";

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      desc: "Routine check-ups, cleaning, and preventive care to maintain your oral health.",
      img: generalDentistryImg,
      icon: <FaTooth fontSize={24} />,
    },
    {
      title: "Dental Implants",
      desc: "Permanent, natural-looking solutions for missing teeth with long-lasting results.",
      img: dentalImplantImg,
      icon: <GiAncientScrew  fontSize={24} />,
    },
    {
      title: "Orthodontics",
      desc: "Straighten your teeth with modern braces and clear aligner treatments.",
      img: orthodontics,
      icon: <LiaTeethOpenSolid fontSize={24} />,
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile with whitening, veneers, and aesthetic treatments",
      img: cosmeticDentistryImg,
      icon: <AutoAwesomeOutlined fontSize={"medium"} />,
    },
    {
      title: "Root Canal Treatment",
      desc: "Relieve pain and save your natural teeth with advanced root canal therapy.",
      img: rootCanalImg,
      icon: <TbDental fontSize={24} />,
    },
    {
      title: "Periodontal Care",
      desc: "Gum disease treatment and maintenance for healthy gums and strong teeth.",
      img: periodontalImg,
      icon: <FaHandHoldingHeart  fontSize={24} />,
    },
    {
      title: "Oral Surgery",
      desc: "Safe and comfortable surgical solutions, including widsom teeth extraction.",
      img: oralSurgeryImg,
      icon: <FaUserDoctor fontSize={24} />,
    },
    {
      title: "Digital Dentistry",
      desc: "Advanced digital technology for percise diagnosis and efficient treatment.",
      img: digitalImg,
      icon: <RiQrScan2Line fontSize={24} />,
    },
  ];
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
            {services.map((service, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <ServiceCard
                  img={service.img}
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              bgcolor: "accent.surface",
              mt: 3,
              borderRadius: 5,
              p: 3,
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
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, fontSize: 16, color: "text.primary" }}
                >
                  Book Your Appointment
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: "text.secondary",
                  }}
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
                mt: { xs: 3, md: 0 },
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
