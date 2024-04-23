import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SignupPage = () => {
  return (
    <>
      <form action="">
        <div>
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
              Sign up
            </Typography>

            <TextField
              type="First Name"
              variant="outlined"
              placeholder="First Name"
              margin="normal"
            />
            <TextField
              type="Last Name"
              variant="outlined"
              placeholder="Last Name"
              margin="normal"
            />
            <TextField
              type="Email"
              variant="outlined"
              placeholder="Email"
              margin="normal"
            />
            <TextField
              type="Password"
              variant="outlined"
              placeholder="Password"
              margin="normal"
            />
            <Button
              variant="contained"
              color="info"
              sx={{ borderRadius: 3 }}
              type="Submit"
            >
              Get Started
            </Button>
            <Typography variant="h9" marginTop={2} textAlign={"center"}>
              Aleady have an account?
            </Typography>
            <Button sx={{ borderRadius: 3 }}>Login</Button>
          </Box>
        </div>
      </form>
    </>
  );
};

export default SignupPage;