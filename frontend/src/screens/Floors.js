import React from "react";
import { Box, Grid, styled, Paper, Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid ",
}));

export default function Floors() {
  return (
    <Box
      height={450}
      width={"auto"}
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      sx={{ border: "2px solid grey", backgroundColor: "#ECFFDC" }}
    >
      <Grid container columnSpacing={{ xs: 10, sm: 0, md: 0 }}>
        {/* Top section */}
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              IT Lab 04
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              IT Lab 06
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              IT Lab 07
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              IT Lab 01
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              IT Staff Room
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              Mech Lab 02
            </Item>
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 10, sm: 0, md: 0 }}
        my={27}
        sx={{ marginTop: 23 }}
      >
        {/* Bottom section */}
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              Boys Common Room
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              Comps Lab 08
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              IT Lab 02
            </Item>
          </Button>
        </Grid>

        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              Mech Lab 01
            </Item>
          </Button>
        </Grid>

        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              Seminar Hall
            </Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth>
            <Item
              sx={{
                width: 0.7,
                height: 100,
                backgroundColor: "#00FFFF",
                "&:hover": { color: "primary.main", cursor: "pointer" },
              }}
            >
              Girls Common Room
            </Item>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}