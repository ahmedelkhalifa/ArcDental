import { Box, Typography } from "@mui/material";
import React from "react";

const FeaturesCard = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: {xs: "flex-start", md: "center"},
          gap: 1,
          width: "100%",
          p: {xs: 0, md: 1}
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(14, 58, 138, 0.1)",
            borderRadius: "50%",
            width: { xs: "50px", md: "80px" },
            height: { xs: "50px", md: "80px" },
            color: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.icon}
        </Box>
        <Box
          sx={{
            flex: 1,
            p: {xs: 1, md: 2},
            borderRight: {xs: "none", lg: props.border === "active" ? "2px solid #E5E7EB" : "none"},
            borderColor: "border.main",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 600,
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "9px", md: "14px" },
              mt: 1,
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            {props.sub}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FeaturesCard;
