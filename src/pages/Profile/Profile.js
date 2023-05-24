import React, { useEffect, useState } from 'react'
import * as logsAPI from '../../utilities/users-api';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material'
import LogItem from '../../components/LogItem/LogItem';
import * as userService from '../../utilities/users-service'


const Profile = () => {

  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await logsAPI.getUserDetails(id);
        setUser(data)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  function handleLogOut() {
    userService.logOut()
    setUser(null)
    // navigate(" ")
    window.location.reload();
  }

   console.log("fetchedUser:", user) 
   //console.log("user id:" , user._id)
  return (
    
    <Box
      display="flex"
      flexDirection={"column"}
    >
      {user && (
      <>
        <Typography
          textAlign={"center"}
          variant='h3'
          fontFamily={"Bruno Ace SC, cursive"}
          padding={2}
        >
          User Profile
        </Typography>

        <Typography
          fontFamily={"Bruno Ace SC, cursive"}
          padding={1}
          textAlign={"left"}
        >
          Name: {user.name}
        </Typography>

        <Typography
          fontFamily={"Bruno Ace SC, cursive"}
          padding={1}
          textAlign={"left"}
        >
          Email: {user.email}
        </Typography>
        <Button
           onClick={handleLogOut}
           sx={{mr:'auto', width: "15%"}}
           color='warning'
           variant='contained'
        >Logout</Button>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          { user.posts && user.posts.map((item, index)=>(
        
         <LogItem  
           key={index} 
           date={new Date(`${item.date}`).toLocaleDateString()}
           description={item.description}
           image={item.image}
           id={item._id}
           location={item.location}
           title={item.title}
           user={item.user}
           logedInUser ={user}
           userId ={item.user._id}
           name={item.user.name}
       />
          ))}
        </Box></>)}
    </Box>
  )
}

export default Profile