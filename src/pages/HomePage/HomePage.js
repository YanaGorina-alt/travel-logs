import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <Box position="relative" width="100%" height="90vh">
        <img  src='/road.jpg' alt="Road" width="100%" height="70%"/>
        <Typography 
            fontFamily={'Dancing Script, cursive'}
            variant="h3" 
            fontWeight="bold"
            textAlign={"center"} 
            width="100%" 
            sx={{position:"absolute", top:"0px", color:"#111115de", background:"#B2C8DF"}}
        >
            Take the bold step to embrace the life you've always desired
        </Typography>
        <Box 
            width="100%"
            height="30%"
            display="flex"
            flexDirection="column"
        >
            <Typography
                fontFamily= 'Bruno Ace SC, cursive'
                textAlign={'center'}
                variant='h4'
                padding={"4"}
            >
                OPEN UP AND SHARE THE ADVENTURES OF YOUR TRAVELS
            </Typography>
            <Box margin='auto'>
                <Button LinkComponent={Link} to="/add" variant='outlined' sx={{mr: 2}}> 
                    Share Your Story
                </Button >
                <Button LinkComponent={Link} to="/posts" variant="contained" sx={{ml: 2}}>
                    View Logs
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default HomePage