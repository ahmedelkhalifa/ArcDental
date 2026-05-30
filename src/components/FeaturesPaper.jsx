import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import FeaturesCard from "./FeaturesCard";
import { Computer, GradeOutlined, Medication, VerifiedUserOutlined } from "@mui/icons-material";

const FeaturesPaper = () => {
  return (
    <>
      <Box sx={{ px: {xs: 3, md: 10}, position: "relative", top: "-5vh", zIndex: 100 }}>
        <Paper sx={{ width: "100%", p: 2, borderRadius: 3 }} elevation={5}>
          <Grid container>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <FeaturesCard
                icon={<Medication sx={{fontSize: {xs: "24px", md: "36px"}}} />}
                title="Expert Dentists"
                sub="Expert and certified professional team"
                border="active"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <FeaturesCard
                icon={<Computer sx={{fontSize: {xs: "24px", md: "36px"}}} />}
                title="Digital Technology"
                sub="Comfortable treatments with the latest technology"
                border="active"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <FeaturesCard
                icon={<VerifiedUserOutlined sx={{fontSize: {xs: "24px", md: "36px"}}} />}
                title="sterile Environment"
                sub="International standards in hygen and security"
                border="active"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <FeaturesCard
                icon={<GradeOutlined sx={{fontSize: {xs: "24px", md: "36px"}}} />}
                title="Patient Satisfaction"
                sub="Your satisfaction is our priority"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default FeaturesPaper;
