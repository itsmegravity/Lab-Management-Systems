import React from 'react';
import { Box } from '@mui/material';

const Stack = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={0} >
      <div style={{ width: 100, height: 30, backgroundColor: '#3cb371', position: 'relative' }}>
      </div>
     
      <div style={{ width: 150, height: 60, backgroundColor: '#3cb371', position: 'relative' }}>
      </div>

      <div style={{ width: 200, height: 90, backgroundColor: '#3cb371', position: 'relative' }}>
      </div>
    </Box>
  );
};

export default Stack;
