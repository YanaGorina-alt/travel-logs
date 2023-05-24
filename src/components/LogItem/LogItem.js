import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography , Box, CardActions, Snackbar, Alert} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import * as logsAPI from '../../utilities/logs-api';
import { useParams } from 'react-router-dom';




const LogItem = ({title,description,image,location,date,id, user,name, logedInUser}) => {
  const { userId } = useParams();
  const[open, setOpen] = useState(false)
  //check if id of the user of this post is the same as the loged user's id
  const isLogedInUser = () => {
  
    if (logedInUser._id=== user._id) {
      return true
    }
    return false;
    
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    
    try {
        await logsAPI.deletePost(userId);
        
      } catch (error) {
        console.log(error);
      }
     
}
    return (
    <Card sx={{ 
        width: "50%", 
        height: "80vh", 
        margin:1, 
        padding:1, 
        display: "flex", 
        flexDirection:"column", 
        boxShadow:"5px 5px 10px #ccc" 
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {/* {name.charAt(0)} */}
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
        height="300"
        alt={title}
      />
      <CardContent>
      <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display={"flex"} >
            <Typography width="170px" fontWeight={"bold"} variant='div'>
                {name}
            </Typography>
            <Typography paddingTop={1} variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Box>
      </CardContent>
      {/* only  posts for logedIn user will have  edit and delete options */}
      { isLogedInUser() && 
      (<CardActions sx={{marginLeft:'auto'}}>
        <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
            <ModeEditOutlineIcon/>
        </IconButton>
        <IconButton onClick={handleDelete} > 
            <DeleteForeverIcon color="error"/>
        </IconButton>
      </CardActions>
      )}
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={()=>setOpen(false)}
      >
          <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: '100%' }}>
              This is a success message!
          </Alert>
      </Snackbar>
   </Card>
  )
}

export default LogItem