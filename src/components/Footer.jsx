import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo2.png";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOnOutlined,
  PhoneOutlined,
  Pinterest,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: 3, md: 6 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box component={"img"} src={logo} sx={{ height: "50px" }} />
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                fontSize: 14,
                mt: 0,
              }}
            >
              Modern dentistry for a healthier smile and a better life.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <IconButton>
                <Facebook sx={{ color: "text.primary" }}></Facebook>
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: "text.primary" }} />
              </IconButton>
              <IconButton>
                <LinkedIn sx={{ color: "text.primary" }} />
              </IconButton>
              <IconButton>
                <YouTube sx={{ color: "text.primary" }} />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{ color: "primary.main", fontWeight: 700, fontSize: 16 }}
            >
              Quick Links
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "text.secondary",
                mt: 2,
              }}
            >
              Home
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
            >
              Services
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
            >
              About
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
            >
              Contact
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{ color: "primary.main", fontWeight: 700, fontSize: 16 }}
            >
              Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "text.secondary",
                mt: 2,
              }}
            >
              General Dentistry
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
            >
              Cosmetic Dentistry
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
            >
              Dental Implants
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
            >
              Orthodontics
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
            >
              Oral Surgery
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{ color: "primary.main", fontWeight: 700, fontSize: 16 }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <PhoneOutlined />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  +90 123 456 78 90
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <EmailOutlined />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  info@arcdental.com
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 2 }}
            >
              <LocationOnOutlined></LocationOnOutlined>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  123 Smile Street
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  Dentists City, KKTC
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 1.5, width: "100%" }}>
            <Typography
              variant="body1"
              sx={{ color: "primary.main", fontWeight: 700, fontSize: 16 }}
            >
              Office Hours
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
              >
                Mon - Fri
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
              >
                09:00 AM - 06:00 PM
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
              >
                Saturday
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
              >
                09:00 AM - 06:00 PM
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
              >
                Sunday
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 500, color: "text.secondary" }}
              >
                Closed
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{ borderColor: "border.main", borderWidth: "1px", mt: 3 }}
        ></Divider>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: 12, fontWeight: 500, color: "text.secondary" }}
          >
            © {new Date().getFullYear()} ArcStack. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ fontSize: 12, fontWeight: 500, color: "text.secondary" }}>Privacy Policy</Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 500, color: "text.secondary" }}>Terms of Service</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
