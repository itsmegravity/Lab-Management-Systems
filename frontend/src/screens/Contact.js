import React from "react";
import { Typography, Box } from "@mui/material";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            width: "420px",
            height: "70px",
            backgroundColor: "#cec8ef",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6">Contact us at:</Typography>
        </Box>
        <Box
          sx={{
            width: "420px",
            height: "300px",
            backgroundColor: "#dda0dd",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography>
            <a href="mailto:kindarnav@gmail.com">kindarnav@gmail.com</a>
            <br />
            <a href="mailto:anushkapoojari2004@gmail.com">
              anushkapoojari2004@gmail.com
            </a>
            <br />
            <a href="mailto:snn986561@gmail.com">snn986561@gmail.com</a>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
