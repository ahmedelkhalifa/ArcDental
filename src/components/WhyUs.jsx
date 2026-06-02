import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { CgScreen } from "react-icons/cg";
import { SiLeaflet } from "react-icons/si";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const CardData = (props) => {
  return (
    <Paper sx={{ p: 3, height: "100%", borderRadius: 2, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }} elevation={10}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70px",
          height: "70px",
          bgcolor: "accent.surface",
          color: "primary.main",
          borderRadius: "50%",
        }}
      >
        {props.icon}
      </Box>
      <Typography variant="body1" sx={{ mt: 2, fontWeight: 700 }}>
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ mt: 1, fontWeight: 500, fontSize: 14, color: "text.secondary" }}
      >
        {props.description}
      </Typography>
    </Paper>
  );
};

const WhyUs = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: "36px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-10px",
            width: "50px",
            height: "3px",
            backgroundColor: "accent.main",
          },
        }}
      >
        Why Choose ARC Dental?
      </Typography>
      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <CardData
            icon={<GrUserExpert fontSize="24px" />}
            title="Experienced Specialists"
            description="Our team consists of highly qualified and experienced dental professionals."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <CardData
            icon={<CgScreen fontSize="24px" />}
            title="Modern Technology"
            description="We utilize the latest dental technology for precise and effective treatments."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <CardData
            icon={<SiLeaflet fontSize="24px" />}
            title="Comfortable Experience"
            description="Our clinic is designed to provide a comfortable and welcoming environment for all patients."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <CardData
            icon={<IoShieldCheckmarkOutline fontSize="24px" />}
            title="Long-lasting Results"
            description="We are committed to providing treatments that deliver long-lasting and natural-looking results."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUs;
