import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";

const Requirements = () => {
  const [softwareRequirements, setSoftwareRequirements] = useState([
    { name: "Python", version: "2.35", checked: false },
    { name: "SQL", version: "2.35", checked: false },
  ]);

  const handleCheckboxChange = (index) => {
    setSoftwareRequirements((prevState) => {
      const updatedRequirements = [...prevState];
      updatedRequirements[index].checked = !updatedRequirements[index].checked;
      return updatedRequirements;
    });
  };

  return (
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
        sx={{ backgroundColor: "grey" }}
      >
        <Typography
          variant="h4"
          padding={3}
          textAlign={"center"}
          sx={{ color: "white" }}
        >
          Requirements
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: 2,
          }}
        >
          <Typography variant="body1" sx={{ marginRight: 10, color: "white" }}>
            Software
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 10, color: "white" }}>
            Version
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            Status{" "}
          </Typography>
        </Box>

        {softwareRequirements.map((requirement, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: 2,
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginRight: 12, color: "white" }}
            >
              {requirement.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: 12, color: "white" }}
            >
              {requirement.version}
            </Typography>
            <Checkbox
              color="default"
              sx={{ color: "white" }}
              checked={requirement.checked}
              onChange={() => handleCheckboxChange(index)}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Requirements;
