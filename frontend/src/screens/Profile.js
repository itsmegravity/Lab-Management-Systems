import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../components/Header";

const ProfilePage = ({ userProfilePic }) => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe", // Default name
    phone: "123-456-7890", // Default phone number
    email: "john.doe@example.com", // Default email

    // Add more user details as needed
  });

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Function to fetch user details
    const fetchUserDetails = async () => {
      try {
        // Example API call to fetch user details
        const response = await fetch("https://api.example.com/user-details");
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const userData = await response.json();
        setUserDetails(userData); // Update user details in state
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails(); // Call the function to fetch user details
  }, []); // Empty dependency array means this effect runs only once, when the component mounts

  const renderContent = () => {
    switch (value) {
      case "one":
        return (
          <Typography
            variant="h4" // Increase the size of the text
            align="center" // Align the text to the center
            sx={{ marginTop: "50px" }} // Add some top margin for spacing
          >
            Assigned Labs
          </Typography>
        );
      case "two":
        return (
          <Typography
            variant="h4" // Increase the size of the text
            align="center" // Align the text to the center
            sx={{ marginTop: "50px" }} // Add some top margin for spacing
          >
            Daily Work
          </Typography>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header></Header>
      {/* First AppBar */}
      <AppBar
        position="static"
        sx={{
          height: "180px",
          backgroundColor: "white",
          color: "white",
          marginTop: 10,
        }}
      >
        <Toolbar sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: "10px", // Adjust as needed
              width: "300px", // Adjust as needed
              height: "400px",
              backgroundColor: "white", // Transparent background color
              textAlign: "center",
              boxShadow: "5px 5px 10px #ccc",
              marginTop: "650px",
              paddingTop: "20px", // Adjust as needed
              paddingBottom: "20px", // Adjust as needed
            }}
          >
            {/* Box on the left side */}
            <Typography variant="body1" component="div" sx={{ color: "black" }}>
              <p>
                <PhoneIcon sx={{ color: "red" }} /> {userDetails.phone}
              </p>
              <p>
                <EmailIcon sx={{ color: "red" }} /> {userDetails.email}
              </p>
            </Typography>
            {/* Add more details below if needed */}
          </Box>
          <Avatar
            alt="Avatar"
            src={userProfilePic}
            sx={{
              width: 180,
              height: 180,
              marginLeft: "50px",
            }} // Adjust the negative margin to half of the width of the Box
          />
          <Typography variant="h4" component="div" sx={{ color: "black" }}>
            {userDetails.name}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Second AppBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          color: "black",
          marginLeft: "320px",
          marginTop: "15px",
        }}
      >
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            sx={{ width: "100%" }}
          >
            <Tab value="one" label="Assigned Labs" sx={{ flex: 10 }} />
            <Tab value="two" label="Daily Work" sx={{ flex: 10 }} />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* Render content based on selected tab */}
      <Box sx={{ marginLeft: "320px", marginTop: "15px" }}>
        {renderContent()}
      </Box>
    </>
  );
};

export default ProfilePage;
