import React from "react";
import { Typography, Box } from "@mui/material";
import Header from "../components/Header";

function Aboutus() {
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
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              color: "#FF1744",
              fontSize: "4rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              marginBottom: "20px",
            }}
          >
            About Us
          </Typography>
        </Box>
        <Box
          sx={{
            width: "1000px",
            height: "300px",
            backgroundColor: "#dda0dd",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "#333",
              fontSize: "1.2rem",
              lineHeight: "1.6",
            }}
          >
            Welcome to the future of lab management! As pioneers in the IT
            industry, our mission is to revolutionize the way labs are managed.
            No more tedious manual inspections; with our cutting-edge solution,
            lab assistants will navigate through their tasks with ease, saving
            valuable time and resources. Join us in transforming the lab
            management landscape into a sci-fi adventure, where innovation knows
            no bounds.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Aboutus;

