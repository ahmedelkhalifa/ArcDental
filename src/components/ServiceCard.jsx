import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import img from "../assets/heroImg.png";
import { CalendarMonthOutlined, East } from "@mui/icons-material";

const ServiceCard = (props) => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
        //   height: "100%",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{ width: "100%", height: "100px", overflow: "hidden" }}
        >
          <Box
            component={"img"}
            src={img}
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
              <CalendarMonthOutlined fontSize="small" />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: "text.primary", fontSize: 16, fontWeight: 600 }}
              >
                General Dentistry
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Routine check-ups, cleaning, and preventive care to maintain
                your oral health.
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
          >
            Learn more
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ServiceCard;
