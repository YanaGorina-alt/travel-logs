import { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import HikingIcon from '@mui/icons-material/Hiking';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

const links = ["home","profile","add", "posts"];

export default function Header ({user, setUser}) {
    const[value, setValue] = useState();

    function handleLogOut() {
        userService.logOut()
        setUser(null)
      }
  return ( 
    <AppBar sx={{bgcolor:"transparent", position:"sticky"}}>
        <Toolbar>
            <HikingIcon sx={{color: "blue"}}/>

            <Tabs value={value} onChange={(e,val)=>setValue(val)} sx={{ml:"auto", textDecoration:"none"}}>
            {links.map((link) =>
            link === "profile" ? (
              <Tab
                component={Link}
                to={`/profile/${user._id}`}
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "18px",
                  },
                }}
                key={link}
                label={link}
              />
            ) : (
              <Tab
                component={Link}
                to={`/${link === "home" ? "" : link}`}
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "18px",
                  },
                }}
                key={link}
                label={link}
              />
            )
          )}
            </Tabs>
        </Toolbar>
    </AppBar>
  )
}

