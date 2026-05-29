import { Box, Typography } from "@mui/material";
import React from "react";

const FeaturesCard = (props) => {
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 3, width: "100%", p: 3 }}
      >
        <Box
          sx={{
            bgcolor: "rgba(14, 58, 138, 0.1)",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            color: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.icon}
        </Box>
        <Box sx={{flex: 1}}>
          <Typography
            variant="body1"
            sx={{ color: "text.primary", fontSize: "16px", fontWeight: 600 }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: "14px", mt: 1 }}
          >
            {props.sub}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FeaturesCard;
