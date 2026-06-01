import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { CalendarMonthOutlined, East } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ServiceCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box
          sx={{ width: "100%", height: "100px", overflow: "hidden" }}
        >
          <Box
            component={"img"}
            src={props.img}
            loading="lazy"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            px: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                bgcolor: "accent.surface",
                borderRadius: "50%",
                position: "relative",
                top: "-25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "primary.main",
              }}
            >
              {props.icon}
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: "text.primary", fontSize: 16, fontWeight: 600 }}
              >
                {props.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {props.desc}
              </Typography>
            </Box>
          </Box>
          <Button
            startIcon={<East />}
            sx={{
              mt: "auto",
              alignSelf: "flex-start",
              p: 0,
              fontSize: 14,
            }}
            onClick={() => navigate(`/services/${props.id}`)}
          >
            Learn more
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ServiceCard;
