import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import { TbDental } from "react-icons/tb";

const ProcessCard = (props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
        bgcolor: "background.paper",
        borderRadius: "8px",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          backgroundColor: "accent.main",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {props.number || "1"}
      </Box>
      <Box
        sx={{
          width: "60px",
          height: "60px",
          backgroundColor: "accent.surface",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "primary.main",
          margin: "10px auto",
        }}
      >
        {props.icon || <TbDental fontSize={36}/>}
      </Box>
      <Box sx={{width: "100%"}}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "center",
            width: "60%",
            margin: "16px auto",
          }}
        >
          {props.title || "Initial Consultation"}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "12px",
            my: 2,
            fontWeight: 500,
            textAlign: "center",
            width: "90%",
            color: "text.secondary",
            margin: "16px auto",
          }}
        >
          {props.description || "Our initial consultation involves a thorough examination of your oral health and discussion of your treatment goals."}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ProcessCard;
