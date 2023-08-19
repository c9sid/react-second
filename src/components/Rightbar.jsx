import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react'

const Rightbar = () => {
  return (
    <Box borderLeft={"1px solid lightgray"} flex={2} p={2} sx={{ display: { xs: "none", sm: "block"} }}>
      <Box position={"fixed"} width={300}>

        <Typography variant='h6' fontWeight={300}>Online Friends</Typography>

        <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://wallpaperaccess.com/full/2811876.jpg" />
  <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" />
  <Avatar alt="Cindy Baker" src="https://wallpaperaccess.com/full/2811876.jpg" />
  <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" />
  <Avatar alt="Cindy Baker" src="https://wallpaperaccess.com/full/2811876.jpg" />
  <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" />
  <Avatar alt="Cindy Baker" src="https://wallpaperaccess.com/full/2811876.jpg" />
  <Avatar alt="Cindy Baker" src="https://wallpaperaccess.com/full/2811876.jpg" />
  <Avatar alt="Cindy Baker" src="https://wallpaperaccess.com/full/2811876.jpg" />
  <Avatar alt="Agnes Walker" src="https://wallpaperaccess.com/full/2811876.jpg" />
  <Avatar alt="Trevor Henderson" src="https://wallpaperaccess.com/full/2811876.jpg" />
</AvatarGroup>

        <Typography variant='h6' fontWeight={300} mt={2} mb={2}>Latest Posts</Typography>
  
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem> <img src={'https://wallpaperaccess.com/full/2811876.jpg'} alt="post_img" /></ImageListItem>
          <ImageListItem> <img src={'https://wallpaperaccess.com/full/2811876.jpg'} alt="post_img" /></ImageListItem>
          <ImageListItem> <img src={'https://wallpaperaccess.com/full/2811876.jpg'} alt="post_img" /></ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={300} mt={2} mb={2}>Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://lh3.googleusercontent.com/ogw/AAEL6sib7kybdKy2lRPCaHGhM57rmKSIjYM1YuK5De_sjw=s32-c-mo" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar