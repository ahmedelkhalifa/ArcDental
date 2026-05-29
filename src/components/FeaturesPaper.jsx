import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import FeaturesCard from "./FeaturesCard";
import { Medication } from "@mui/icons-material";

const FeaturesPaper = () => {
  return (
    <>
      <Box sx={{ px: 10, position: "relative", top: "-25%", zIndex: 100 }}>
        <Paper sx={{ width: "100%", p: 2, borderRadius: 3 }} elevation={5}>
          <Grid container>
            <Grid size={{ xs: 6, md: 3 }} sx={{borderRight: "1px solid", borderColor: "border.main"}}>
              <FeaturesCard
                icon={<Medication fontSize="large" />}
                title="Expert Dentists"
                sub="Expert and certified professional team"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }} sx={{borderRight: "1px solid", borderColor: "border.main"}}>
              <FeaturesCard
                icon={<Medication fontSize="large" />}
                title="Expert Dentists"
                sub="Expert and certified professional team"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }} sx={{borderRight: "1px solid", borderColor: "border.main"}}>
              <FeaturesCard
                icon={<Medication fontSize="large" />}
                title="Expert Dentists"
                sub="Expert and certified professional team"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <FeaturesCard
                icon={<Medication fontSize="large" />}
                title="Expert Dentists"
                sub="Expert and certified professional team"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default FeaturesPaper;
