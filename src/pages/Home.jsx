import { Box } from "@mui/material";
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero.jsx";
import FeaturesCard from "../components/FeaturesPaper.jsx";
import img from "../assets/heroImg.png";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
    {/* hero */}
      <Box sx={{ display: "flex", height:{xs: "fit-content", lg:"100vh"}, flexDirection: "column" }}>
        <Nav active="home" />
        <Box sx={{ flex: 3, height: "100%", width: "100%" }}>
          <Hero
            top="ARC DENTAL . MODERN DENTAL CLINIC"
            text="Healthy Smiles, Modern Treatments"
            sub1="With the latest technical equipments and expert dentists,"
            sub2="We offer trust worthy treatments for mouth and teeth."
            img={img}
          />
        </Box>
        <Box sx={{ width: "100%", height: "100%", flex: 1 }}>
          <FeaturesCard />
        </Box>
      </Box>
      <Box sx={{py: "100px"}}>
        <Services />
      </Box>
      <Footer/>
    </>
  );
};

export default Home;
