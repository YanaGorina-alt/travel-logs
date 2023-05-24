import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as logsAPI from '../../utilities/logs-api';
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import BackpackIcon from '@mui/icons-material/Backpack';

const PostUpdate = () => {
    const [post, setPost] = useState();

    const[inputs, setInputs] = useState({
        title:"",
        description:"", 
        location:"", 
        image:"", 
        
    });

    const { id } = useParams();
     
    useEffect(() => {
        const fetchPost = async () => {
          try {
            const data = await logsAPI.getById(id);
            setPost(data)
            setInputs({
                title:data.title,
                description:data.description,
                image:data.image,
                location:data.location
            })
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchPost();
      }, [id]);
      

      const handleChange = (e) => {
          setInputs ((prevState)=> ({
              ...prevState,
              [e.target.name]: e.target.value,
          }))
      }
  
      const  handleSubmit = async (e) => {
          e.preventDefault();
          console.log(inputs);
          try {
            await logsAPI.updatePost(id,inputs);
            
          } catch (error) {
            console.log(error);
          }
           
      }
  
    return (
      <Box 
          display="flex" 
          flexDirection={"column"}
          width="100%"
          height="100%"
          // backgroundColor="green"
      >
          <Box display={"flex"} margin={"auto"} padding={2}>
          <Typography
              fontWeight={"bold"}
              variant='h4'
              fontFamily={"dancing script"}
          >
              Add Your Travel Log
  
          </Typography>
          <BackpackIcon sx={{fontSize:'40px', paddingLeft:1, color: "blue"}}/>
          </Box>
         { post && (<form onSubmit={handleSubmit}>
              <Box 
                  padding={3}
                  display={"flex"}
                  margin={"auto"}
                  // width="80%"
                  // backgroundColor="pink"
                  flexDirection={"column"}
                  >
                      <FormLabel sx={{fontFamily:"Bruno Ace SC"}}>Title</FormLabel>
                      <TextField 
                          onChange={handleChange} 
                          name='title' 
                          value={inputs.title} 
                          variant='standard' 
                          margin="normal"
                      />
                      <FormLabel sx={{fontFamily:"Bruno Ace SC"}}>Description</FormLabel>
                      <TextField 
                          onChange={handleChange} 
                          name='description' 
                          value={inputs.description} 
                          variant='standard' 
                          margin="normal"
                      />
                      <FormLabel sx={{fontFamily:"Bruno Ace SC"}}>Image URL</FormLabel>
                      <TextField
                          onChange={handleChange} 
                          name='image' 
                          value={inputs.image}  
                          variant='standard' 
                          margin="normal" 
                      />
                      <FormLabel sx={{fontFamily:"Bruno Ace SC"}}>Location</FormLabel>
                      <TextField 
                          onChange={handleChange} 
                          name='location' 
                          value={inputs.location} 
                          variant='standard' 
                          margin="normal"
                      />
                      
                      <Button type='submit' sx={{mt:2, width:"50%", margin:"auto", borderRadius:3}} color="warning" variant='contained'> Post</Button>
                  
              </Box>
          </form>)}
      </Box>
    )
}

export default PostUpdate