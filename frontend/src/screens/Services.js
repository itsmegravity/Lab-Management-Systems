import React from "react";
import { Typography } from "@mui/material";
import Header from "../components/Header";

function Services() {
  return (
    <div style={{ marginBottom: "20px", marginTop: "80px" }}>
      <Header />
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        style={{
          fontFamily: "Indie Flower, cursive",
          color: "#333",
          fontSize: "4rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          marginBottom: "20px",
        }}
      >
        💻 Explore Our Lab Services 💻
      </Typography>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#333",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="body1"
          style={{
            fontFamily: "Roboto, sans-serif",
            backgroundColor: "#cec8ef",
            fontSize: "1.2rem",
            lineHeight: "1.6",
          }}
        >
          Welcome to our laboratory! Our Lab Management system is like a
          well-equipped lab bench, where every experiment is meticulously
          organized and monitored. Dive into the world of science with us, where
          we offer a comprehensive solution for all your lab activities.
          Discover the intricacies of individual lab components, with real-time
          updates guiding you through each step of your research. Let's unlock
          the mysteries of science together!
        </Typography>
      </div>
    </div>
  );
}

export default Services;
