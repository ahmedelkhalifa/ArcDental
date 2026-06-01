import { Stack, Box, Paper, Typography } from "@mui/material";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DoubleInfoCard = (props) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        position: "relative",
        top: "-50px",
        zIndex: 1,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box sx={{ flex: 1, overflow: "hidden", borderRadius: 4 }}>
          <Box
            component="img"
            src={props.image}
            alt={props.imageAlt}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 36,
              fontWeight: 500,
              mt: 3,
              position: "relative",
              zIndex: 1,
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-10px",
                width: "50px",
                height: "3px",
                backgroundColor: "accent.main",
              },
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 5, mb: 3, width: "90%", color: "text.secondary" }}
          >
            {props.description}
          </Typography>
          {props.bullets.map((bullet, index) => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }} key={index}>
              <FaCheckCircle color="#0946ca" size={20} />
              <Typography
                key={index}
                variant="body1"
                sx={{width: "90%", color: "text.secondary" }}
              >
                {bullet}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Paper>
  );
};

export default DoubleInfoCard;
