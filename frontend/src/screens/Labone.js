import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ComputerSharpIcon from '@mui/icons-material/ComputerSharp';
import Divider from '@mui/material/Divider';
import Header from "../components/Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Griditem = styled(Box)({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const RotatedComputerIcon = styled(ComputerSharpIcon)({
  transform: 'rotate(270deg)',
});

export default function BasicGrid() {
  return (
    <>
    <Header/>
    <Box
      height={500}
      width={1150}
      my={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      sx={{
        border: "2px solid grey",
        backgroundColor: "#ECFFDC",
        position: 'relative',
        // Adjust the left padding to shift icons to the right
        paddingLeft: '100px', // Adjust this value as needed
      }}
    >
      {/* Top Grid */}
      <Grid container spacing={5} fontSize={'90px'} columnGap={{ xs: 4, sm: 4, md: 4 }} margin={0} alignItems={"center"}>
        <Griditem xs={0} rowGap={{ xs: 4, sm: 4, md: 4 }}>
          <RotatedComputerIcon fontSize={'50px'}>xs=5</RotatedComputerIcon>
          <RotatedComputerIcon fontSize={'50px'}>xs=5</RotatedComputerIcon>
          <RotatedComputerIcon fontSize={'50px'}>xs=5</RotatedComputerIcon>
        </Griditem>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'} >xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'}>xs=5</ComputerSharpIcon>
        </Grid>
      </Grid>

      <Divider orientation="horizontal" variant="fullWidth" flexItem />
      {/* Bottom Grid */}
      <Grid container spacing={5} fontSize={'90px'} columnGap={{ xs: 4, sm: 4, md: 4 }} margin={23} >
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'} style={{ transform: 'rotate(180deg)' }}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'} style={{ transform: 'rotate(180deg)' }}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'} style={{ transform: 'rotate(180deg)' }}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'} style={{ transform: 'rotate(180deg)' }}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'} style={{ transform: 'rotate(180deg)' }}>xs=5</ComputerSharpIcon>
        </Grid>
        <Grid item xs={0}>
          <ComputerSharpIcon fontSize={'50px'} style={{ transform: 'rotate(180deg)' }}>xs=5</ComputerSharpIcon>
        </Grid>
      </Grid>
    </Box>
    </>
  );
} 