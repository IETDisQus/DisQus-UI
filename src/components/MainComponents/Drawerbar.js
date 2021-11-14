import { Toolbar, Typography, Divider, List, ListItemAvatar, ListItemIcon, Avatar, ListItemText, ListItem, Button, Drawer } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AccountCircle } from "@mui/icons-material";
import FormDialog from "./InviteDialog";

const Drawerbar = () =>{
    return (
        <>
        <Drawer variant="permanent" anchor="right" position="fixed" sx={{ backgroundColor: '#A7D129' }} >
          <Toolbar sx={{ backgroundColor: '#A7D129', width: 300, height: 131.5 }} >
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ color: '#000000'}}/>
                {/* <AccountCircle /> */}
              </ListItemAvatar>
              <ListItemText primary="User" secondary="email@ietdavv.edu.in" sx={{ color: '#000000' }}/>
            </ListItem>
          </List>
          </Toolbar>
          <Divider sx={{ height:3.5, backgroundColor: '#000000' }} />
          <List sx={{ height:'100%', backgroundColor: '#A7D129', p:2 }} >
            <ListItem button key="Home" sx={{ mb: 2 }}>
            <ListItemIcon>
                <HomeIcon fontSize="large" variant="filled" sx={{ color: '#3E432E' }}/>
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h5" sx={{ color: '#3E432E' }}>Home</Typography>}/>
            </ListItem>
            <ListItem button key="Profile" sx={{ mb: 2 }}>
            <ListItemIcon>
                <PersonIcon fontSize="large" variant="filled" sx={{ color: '#3E432E' }}/>
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h5" sx={{ color: '#3E432E' }}>Profile</Typography>} />
            </ListItem>
            <ListItem button key="Notification" sx={{ mb: 2 }}>
            <ListItemIcon>
                <NotificationsIcon fontSize="large" variant="filled" sx={{ color: '#3E432E' }}/>
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h5" sx={{ color: '#3E432E' }}>Notifications</Typography>} />
            </ListItem>
            <ListItem button key="Invite" sx={{ mb: 2 }} >
            <ListItemIcon>
                <AddReactionIcon fontSize="large" variant="filled" sx={{ color: '#3E432E' }}/>
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h5" sx={{ color: '#3E432E' }}>Send Invite</Typography>} />
            </ListItem>
            <ListItem button key="Logout" sx={{ mb: 2 }}>
            <ListItemIcon>
                <ExitToAppIcon fontSize="large" variant="filled" sx={{ color: '#3E432E' }}/>
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h5" sx={{ color: '#3E432E' }}>Logout</Typography>} />
            </ListItem>
            <ListItem>    
            <Button variant="filled" sx={{ backgroundColor: '#3E432E', color: '#A7D129', borderRadius: 5, p:2, ml: 6, mt:4 }} >
            <Typography variant="h6">
              Post Query
            </Typography>
            </Button>
            </ListItem>
          </List>
      </Drawer>
        </>
    )
}

export default Drawerbar;