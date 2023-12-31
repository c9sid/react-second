import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { CurrencyExchangeSharp, Mail, Notifications } from '@mui/icons-material'
import React from 'react'
import { theme } from '../theme';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "#3b5998",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}) )

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap:"20px", 
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}) );

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap:"10px", 
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}) );

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <AppBar position={"sticky"}>
      <StyledToolbar>
         <Typography varient={"h6"} sx={{ display:{xs: "none", sm: "block"} }}>HackerSid</Typography>
         <CurrencyExchangeSharp sx={{ display:{xs: "block", sm: "none"} }}/>
         <Search><InputBase placeholder='Search...' /></Search>
         <Icons>
         <Badge badgeContent={4} color="error">
          <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
          <Notifications/>
          </Badge>
          <Avatar sx={{width:25, height:25}} src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" 
          onClick={(e)=>setOpen(true)}
          />
         </Icons>
         <UserBox>
         <Avatar sx={{width:25, height:25}} src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" 
          onClick={e=>setOpen(true)}
         />
         <Typography varient="span">Sid</Typography>
         </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar