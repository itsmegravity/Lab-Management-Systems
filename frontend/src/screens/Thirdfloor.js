import React from "react";
import { Box, Grid, styled, Paper, Button } from "@mui/material";
import Header from "../components/Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid",
}));

export default function Thirdfloor() {
  return (
    <>
      <Header />
      <Box
        mt={10}
        height={820}
        width="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        sx={{ border: "2px solid grey", backgroundColor: "grey" }}
      >
        <Grid container spacing={0} style={{ flexWrap: "nowrap" }}>
          {/* Top section */}
          <Grid item xs={2} sx={{ marginTop: 10 }}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                Mech Lab 01
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: 10 }}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                Mech Lab 02
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: 10 }}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                Mech Lab 03
              </Item>
            </Button>
          </Grid>
          {/* New section with decreasing boxes */}

          <Grid item xs={2} sx={{ marginTop: 0 }}>
            <Button>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Item
                  sx={{
                    width: 150,
                    height: 15,
                    backgroundColor: "#FFFF00",
                  }}
                />
                <Item
                  sx={{
                    width: 100,
                    height: 10,
                    backgroundColor: "#FFFF00",
                  }}
                />
                <Item
                  sx={{
                    width: 50,
                    height: 5,
                    backgroundColor: "#FFFF00",
                  }}
                />
              </Box>
            </Button>
          </Grid>

          <Grid item xs={2} sx={{ marginTop: 10 }}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                Mech Lab 04
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: 10 }}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                Mech Staff Room
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: 10 }}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                Mech Lab 05
              </Item>
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          columnSpacing={{ xs: 10, sm: 0, md: 0 }}
          my={27}
          sx={{ marginTop: 23 }}
          style={{ flexWrap: "nowrap" }}
        >
          {/* Bottom section */}
          <Grid item xs={2}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                EXTC Lab 01
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                EXTC Lab 02
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                EXTC Lab 03
              </Item>
            </Button>
          </Grid>
          {/* New section with increasing boxes */}
          <Grid item xs={2} sx={{ marginTop: 28 }}>
            <Button>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Item
                  sx={{
                    width: 50,
                    height: 5,
                    backgroundColor: "#FFFF00",
                  }}
                />
                <Item
                  sx={{
                    width: 100,
                    height: 10,
                    backgroundColor: "#FFFF00",
                  }}
                />
                <Item
                  sx={{
                    width: 150,
                    height: 15,
                    backgroundColor: "#FFFF00",
                  }}
                />
              </Box>
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                EXTC Lab 04
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                EXTC Lab 05
              </Item>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth>
              <Item
                sx={{
                  width: 1,
                  height: 200,
                  backgroundColor: "white",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                EXTC Lab 06
              </Item>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
