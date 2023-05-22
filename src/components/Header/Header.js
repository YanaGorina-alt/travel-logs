import { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import HikingIcon from '@mui/icons-material/Hiking';
import { Link } from 'react-router-dom';

const links = ["home", "logs", "auth"];

export default function Header () {
    const[value, setValue] = useState();
  return ( 
    <AppBar sx={{bgcolor:"transparent", position:"sticky"}}>
        <Toolbar>
            <HikingIcon sx={{color: "blue"}}/>

            <Tabs value={value} onChange={(e,val)=>setValue(val)} sx={{ml:"auto", textDecoration:"none"}}>
                {links.map((link) =>( 
                    <Tab 
                        LinkComponent={Link}
                        to={`/${link==="home" ? "" : link}`}
                        sx={{
                        textDecoration:"none", ":hover":{
                            textDecoration:"underline",
                            textUnderlineOffset:"18px"
                }}} key={link} label={link}/>))}
            </Tabs>
        </Toolbar>
    </AppBar>
  )
}

