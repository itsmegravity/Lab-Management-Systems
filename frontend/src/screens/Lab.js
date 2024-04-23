import React from 'react';
import {Box,Typography,Stack} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';

const Lab = () => {
  return (
    <div>
      
      <Typography variant="h4" padding={20} textAlign={"center"}>
        IT Lab 1
        
      </Typography>
      <Box
       height={500}
       width={'20'}
       my={4}
       display="flex"
       alignItems="center"
       p={2}
       sx={{ border: '2px solid grey', backgroundColor: 'grey' }}
      >
        <Stack direction="row" spacing={4}>
          <ComputerIcon  sx={{fontSize:40}}/>
          <ComputerIcon  sx={{fontSize:40}}/>
          <ComputerIcon  sx={{fontSize:40}}/>
          <ComputerIcon  sx={{fontSize:40}}/>
        </Stack>
      </Box>

    
    </div>
  )
}

export default Lab;
