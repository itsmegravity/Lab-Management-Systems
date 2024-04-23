import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function Loginpage() {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      maxWidth={300}
      maxHeight={900}
      alignItems="center"
      justifyContent={"center"}
      margin={"auto"}
      marginTop={8}
      padding={6}
      borderRadius={6}
      boxShadow={"5px 5px 10px #ccc"}
    >
      <Typography variant="h4" padding={3} textAlign={"center"}>
        Login
      </Typography>
      <Typography variant="h9" textAlign={"center"}>
        Stay updated on Lab Management System
      </Typography>
      <TextField
        type="Email or Phone"
        variant="outlined"
        placeholder="Email or Phone"
        margin="normal"
      />
      <TextField
        type="Password"
        variant="outlined"
        placeholder="Password"
        margin="normal"
      />
      <Button>Forgot Password?</Button>
      <Button variant="contained" color="warning" sx={{ borderRadius: 3 }}>
        Login
      </Button>
      <Typography variant="h9" marginTop={2} textAlign={"center"}>
        New to Lab Management System?
      </Typography>
      <Button sx={{ borderRadius: 3 }}>Join now</Button>
    </Box>
  );
}

export default Loginpage;