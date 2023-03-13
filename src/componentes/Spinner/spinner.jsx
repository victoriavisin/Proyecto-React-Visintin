import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import "./spinner.css"


const spinner = () => {
  return (
    <div className='spinner'>
      <Box sx={{ display: 'flex'}}>
      <CircularProgress color="inherit" />
    </Box>
    </div>
  )
}

export default spinner
