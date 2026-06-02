import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import img from "../assets/services/service2.webp";

import DoubleInfoCard from "../components/DoubleInfoCard.jsx";
import Footer from "../components/Footer.jsx";
import ProcessCard from "../components/ProcessCard.jsx";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiAncientScrew } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { TbContract } from "react-icons/tb";
import { RiQrScan2Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { services } from "../data/services.jsx";
import BeforeAfterCard from "../components/BeforeAfterCard.jsx";
import WhyUs from "../components/WhyUs.jsx";
import FAQ from "../components/FAQ.jsx";
import CtaBar from "../components/CtaBar.jsx";

const ServicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === Number(id));

  // handle invalid id
  if (!service) {
    navigate("/");
    return null;
  }

  const cols = Math.min(service.processSteps.length, 5);
  const mdSize = 12 / cols;

  return (
    <>
      <Box>
        <Nav active="services" />
        <Hero
          top={service.top || "ARC DENTAL . MODERN DENTAL CLINIC"}
          text={service.title}
          sub1={service.page?.sub1}
          sub2={service.page?.sub2}
          img={service.image}
        />
        <Container maxWidth="lg" sx={{ mb: "150px" }}>
          <DoubleInfoCard
            image={service.page?.image}
            imageAlt={service.title}
            title={service.page?.title || "Coming soon..."}
            description={service.page?.description || "Coming soon..."}
            bullets={service.page?.bullets || []}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: "36px",
              mt: 5,
              mb: 10,
              textAlign: "center",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                bottom: "-20px",
                transform: "translateX(-50%)",
                width: "50px",
                height: "3px",
                backgroundColor: "accent.main",
              },
            }}
          >
            {service.page?.processTitle || "Our Process"}
          </Typography>
          <Grid container spacing={2}>
            {service.processSteps?.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: mdSize }} key={index}>
                <ProcessCard
                  icon={step.icon}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 5 }}>
            {service.page?.beforeAfter && (
              <Typography
                variant="h1"
                sx={{ fontSize: "36px", textAlign: "center" }}
              >
                Before & After
              </Typography>
            )}
            <Grid container spacing={4} sx={{ mt: 3 }}>
              {service.page?.beforeAfter?.map((item) => (
                <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                  <BeforeAfterCard
                    title={item.title}
                    image={item.image}
                    description={item.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: 5 }}>
            <WhyUs />
          </Box>
          {service.page?.faq && (
            <Box sx={{ mt: 5 }}>
              <FAQ faqItems={service.page?.faq} />
            </Box>
          )}
          <CtaBar />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default ServicePage;
