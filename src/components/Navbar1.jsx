import { AppBar, Box, styled, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)({
    background: "#000000",

});

const Tabs = styled(NavLink)({
    marginRight: '20px',
    color: "inherit",
    textDecoration: "none",
});

const Navbar1 = () => {
  return (
    <Box>
      <Header position={"sticky"}>
        <Toolbar>
        <Tabs to= "/">HackerSid</Tabs>
        <Tabs to= "Adduser">Adduser</Tabs>
        <Tabs to = "AllUsers">AllUsers</Tabs>
         </Toolbar>
      </Header>
    </Box>
  )
}

export default Navbar1