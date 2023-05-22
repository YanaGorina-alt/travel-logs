import React from 'react'
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography , Box, CardActions, Button} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const LogItem = ({title,description,image,location,date,id}) => {
  return (
    <Card sx={{ 
        width: "50%", 
        // height: "60vh", 
        margin:1, 
        padding:1, 
        display: "flex", 
        flexDirection:"column", 
        boxShadow:"5px 5px 10px #ccc" 
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<LocationOnIcon />}
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />
      
      <img
        src={image}
        height="194"
        alt={title}
      />
      <CardContent>
      <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display={"flex"} >
            <Typography width="170px" fontWeight={"bold"} variant='div'>
                Yana Gorina
            </Typography>
            <Typography paddingTop={1} variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{marginLeft:'auto'}}>
        <IconButton  color="warning">
            <ModeEditOutlineIcon/>
        </IconButton>
        <IconButton>
            <DeleteForeverIcon color="error"/>
        </IconButton>
      </CardActions>
   </Card>
  )
}

export default LogItem