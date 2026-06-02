import { East, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

const FAQ = (props) => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: "36px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-10px",
            width: "50px",
            height: "3px",
            backgroundColor: "accent.main",
          },
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ mt: 8, alignItems: "flex-start" }}>
        <Box sx={{ flex: 1 }}>
          {props.faqItems?.map((item, index) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "accent.main" }} />}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, fontSize: 14 }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: "text.secondary",
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box
          sx={{
            flex: 1,
            bgcolor: "accent.surface",
            borderRadius: 2,
            py: 2,
            px: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <MdOutlineSupportAgent
            fontSize={48}
            color="rgb(14, 58, 138)"
          />
          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18, mt: 2 }}>
            Still have questions?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: 14,
              color: "text.secondary",
              width: "50%",
              mt: 1,
            }}
          >
            Our team is here to help you with any further information.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              borderColor: "accent.main",
              color: "accent.main",
              width: "200px",
            }}
            endIcon={<East />}
          >
            Contact Us
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FAQ;
