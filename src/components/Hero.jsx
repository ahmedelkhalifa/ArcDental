import { Box, Button } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { CalendarMonthOutlined, East, Phone } from "@mui/icons-material";

const Hero = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: 1,
            pl: { xs: 3, lg: 10 },
            pr: { xs: 3, lg: 4 },
            py: { xs: 3, lg: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            {props.top}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "40px", lg: "60px" },
                color: "text.main",
                display: "inline",
              }}
            >
              {props.text}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "40px", lg: "60px" },
                color: "primary.main",
                display: "inline",
              }}
            >
              .
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "text.secondary",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {props.sub1}
            <Box sx={{ display: { xs: "none", md: "inline" } }}>
              <br />
            </Box>
            {props.sub2}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
              gap: { xs: 2, md: 3 },
              mt: 3,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: "50px",
                width: { xs: "200px", lg: "150px" },
                bgcolor: "primary.main",
                color: "background.default",
                fontSize: 14,
                fontWeight: 400,
              }}
              startIcon={<CalendarMonthOutlined />}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                height: "50px",
                width: "200px",
                borderColor: "primary.main",
                color: "primary.main",
                fontSize: 14,
                fontWeight: 500,
              }}
              startIcon={<Phone />}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1.3,
            height: "100%",
            width: "100%",
            overflow: "hidden",
            position: "relative",

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              background: {
                xs: "linear-gradient(to bottom, rgba(248,250,252,1) 0%, rgba(248,250,252,0) 50%)",
                lg: "linear-gradient(to right, rgba(248,250,252,1) 0%, rgba(248,250,252,0) 50%)",
              },

              zIndex: 1,
            },
          }}
        >
          <Box
            component={"img"}
            src={props.img}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
