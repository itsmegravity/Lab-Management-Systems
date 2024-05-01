import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Slider, Stack, TextField, Typography } from "@mui/material";

function Homepage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(message);

  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant="h4">Enter Login Details</Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button variant="contained" sx={{borderRadius:4}}>Submit</Button>
      </Stack>
    </Box>
  );
}

export default Homepage;
