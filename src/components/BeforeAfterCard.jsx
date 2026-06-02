import { Paper, Box, Typography } from "@mui/material";
import React from "react";

const BeforeAfterCard = (props) => {
  return (
    <Paper sx={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: 2, height: "100%" }} elevation={10}>
      <Box sx={{ width: "100%", height: "300px", overflow: "hidden", borderRadius: 2 }}>
        <Box
          component="img"
          src={props.image}
          alt={props.title}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{ textAlign: "center", fontSize: 18, fontWeight: 700 }}
          variant="body1"
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: 500,
            color: "text.secondary",
          }}
          variant="body1"
        >
          {props.description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default BeforeAfterCard;
