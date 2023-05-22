import { useEffect, useState } from 'react'
import * as logsAPI from '../../utilities/logs-api';
import LogItem from '../../components/LogItem/LogItem'
import { Box } from '@mui/material'


const LogsPage = () => {
    const [posts, setPosts] = useState([]); // Add state for storing posts

    useEffect(() => {
        async function fetchPosts() { 
          try {
            const fetchedPosts = await logsAPI.getAll();
            setPosts(fetchedPosts); // Update the state with fetched posts
          } catch (error) {
            console.log('Error fetching posts:', error);
          }
        }
    
        fetchPosts(); // Call the fetchPosts function
      }, []);
  return (
    <Box 
        display="flex" 
        flexDirection="column" 
        padding={3} 
        justifyContent="center" 
        alignItems="center"
    > {posts.length && posts.map((item, index) => (
        <LogItem  
            key={index} 
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
        />
      ))}
       
    </Box>
  )
}

export default LogsPage