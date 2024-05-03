import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ComputerSharpIcon from "@mui/icons-material/ComputerSharp";
import Header from "../components/Header";
import Requirements from "./Requirements";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Griditem = styled(Box)({
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const RotatedComputerIcon = styled(ComputerSharpIcon)({
  transform: "rotate(270deg)",
});

export default function BasicGrid() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header />
      <Box
        height={"auto"}
        width={"auto"}
        marginTop={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        sx={{
          border: "2px solid grey",
          backgroundColor: "#ECFFDC",
          position: "relative",
          // Adjust the left padding to shift icons to the right
          paddingLeft: "100px", // Adjust this value as needed
        }}
      >
        <Item></Item>
        {/* Top Grid */}
        <Grid
          container
          spacing={5}
          fontSize={"90px"}
          columnGap={{ xs: 4, sm: 4, md: 4 }}
          margin={0}
          alignItems={"center"}
        >
          <Griditem xs={0} rowGap={{ xs: 4, sm: 4, md: 4 }}>
            <Button onClick={handleClickOpen}>
              <RotatedComputerIcon style={{ fontSize: "100px" }}>
                xs=5
              </RotatedComputerIcon>
            </Button>

            <Button onClick={handleClickOpen}>
              <RotatedComputerIcon style={{ fontSize: "100px" }}>
                xs=5
              </RotatedComputerIcon>
            </Button>
            <Button onClick={handleClickOpen}>
              <RotatedComputerIcon style={{ fontSize: "100px" }}>
                xs=5
              </RotatedComputerIcon>
            </Button>
          </Griditem>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon style={{ fontSize: "100px" }}>
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon style={{ fontSize: "100px" }}>
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon style={{ fontSize: "100px" }}>
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon style={{ fontSize: "100px" }}>
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon style={{ fontSize: "100px" }}>
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon style={{ fontSize: "100px" }}>
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon style={{ fontSize: "100px" }}>
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
        </Grid>
        <Box
          height={"1px"}
          width={600}
          my={4}
          marginTop={15}
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="#808080"
          p={2}
          sx={{
            border: "2px solid grey",
            backgroundColor: "#ECFFDC",
            position: "relative",
            // Adjust the left padding to shift icons to the right
            paddingLeft: "100px", // Adjust this value as needed
          }}
        ></Box>

        {/* Bottom Grid */}
        <Grid
          container
          spacing={5}
          fontSize={"90px"}
          columnGap={{ xs: 4, sm: 4, md: 4 }}
          margin={5}
        >
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon
                style={{ fontSize: "100px", transform: "rotate(180deg)" }}
              >
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon
                style={{ fontSize: "100px", transform: "rotate(180deg)" }}
              >
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>

          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon
                style={{ fontSize: "100px", transform: "rotate(180deg)" }}
              >
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon
                style={{ fontSize: "100px", transform: "rotate(180deg)" }}
              >
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon
                style={{ fontSize: "100px", transform: "rotate(180deg)" }}
              >
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon
                style={{ fontSize: "100px", transform: "rotate(180deg)" }}
              >
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>

          <Grid item xs={0}>
            <Button onClick={handleClickOpen}>
              <ComputerSharpIcon
                style={{ fontSize: "100px", transform: "rotate(180deg)" }}
              >
                xs=5
              </ComputerSharpIcon>
            </Button>
          </Grid>
        </Grid>
        {/* Dialog for Requirement Page */}
        <Dialog open={open} onClose={handleClose}>
          {/* Content of your requirement page */}
          <Requirements />

          <Box p={2}>
            <Button onClick={handleClose} sx={{ color: "black" }}>
              Submit
            </Button>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}
