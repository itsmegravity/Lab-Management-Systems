import React, { useState } from 'react';
import { Box} from '@mui/material';

const Stack = () => {
  const [clicked, setClicked] = useState([false]);

  const handleClick = (index) => {
    const updatedClicked = [...clicked];
    updatedClicked[index] = !updatedClicked[index];
    setClicked(updatedClicked);
  };

  return (
         

          <Box display="flex" flexDirection="column" alignItems="center" gap={0} onClick={() => handleClick(0) }
          >
      <div 
        style={{
          width: '150px',
          height: '10px',
          backgroundColor: '#B68A9D',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          border: '2px solid ',
          opacity: clicked[0] ? 0.5 : 1
        }} 
        
      >
      </div>

      <div 
        style={{
          width: '200px',
          height: '20px',
          backgroundColor: '#A07989',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          border: '2px solid black',
          opacity: clicked[0] ? 0.5 : 1
        }} 
      
      >
      </div>

      <div 
        style={{
          width: '250px',
          height: '30px',
          backgroundColor: '#896876',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          border: '2px solid black',
          opacity: clicked[0] ? 0.5 : 1
        }} 
      
      >
      </div>
      <div 
        style={{
          width: '300px',
          height: '40px',
          backgroundColor: '#725762',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          border: '2px solid black',
          opacity: clicked[0] ? 0.5 : 1
        }} 
      >
      </div>
      <div 
        style={{
          width: '350px',
          height: '50px',
          backgroundColor: '#5B454E',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          border: '2px solid black',
          opacity: clicked[0] ? 0.5 : 1
        }} 
        
      >
      </div>
      <div 
        style={{
          width: '400px',
          height: '60px',
          backgroundColor: '#44343B',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          border: '2px solid black',
          opacity: clicked[0] ? 0.5 : 1
        }} 
      >
      </div>
    </Box>
  );
};

export default Stack