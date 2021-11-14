import { AppBar, Toolbar, Typography, Divider, List, ListItemAvatar, ListItemIcon, Avatar, ListItemText, ListItem, TextField, Select, MenuItem, Button, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/private-theming";
import theme from "./Theme/AppTheme";
import logofinal from "./resources/DisQusLogo/logofinal.jpg";
import { display } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Drawerbar from "./components/MainComponents/Drawerbar";
import Headermain from "./components/MainComponents/Headermain";
import Qbox from "./components/MainComponents/Qbox";
import Post from "./components/MainComponents/Post";


const drawerWidth=300


const Homepage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        alignItems: 'center', 
        }}
      >        
        {/* <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`, backgroundColor: '#000000' }}>
          <Toolbar>
          <Box
            component="img"
            sx={{
              height: 80,
              width: 200,
              m: 0.7,
              p: 1,
                }}
            alt="DisQus"
            src={logofinal}
          />
          <Box component="span" sx={{ p: 1, backgroundColor: 'secondary.main', flexGrow: 1, textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h3">Update Profile</Typography> 
          </Box>
          <Box>
            
          </Box>
          </Toolbar>
        </AppBar> */}
        {/* <AppBar position="fixed" sx={{ width: drawerWidth, backgroundColor: '#A7D129', height: 106.5 }}>
          <Toolbar>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ color: '#000000'}}/>
              </ListItemAvatar>
              <ListItemText primary="User" secondary="email@ietdavv.edu.in" sx={{ color: '#000000'}}/>
            </ListItem>
          </List>
          </Toolbar>
        </AppBar>
        <Box sx={{ backgroundColor: 'primary.main', flexGrow: 1, height: 100, color:'secondary.main'}}>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'primary.main', flexGrow: 1, height: 10, mb:3 }}>
      </Box> */}
        {/* <Box sx={{ width: `calc(100% - ${drawerWidth}px)`, backgroundColor: 'primary.main', flexGrow: 1, height: 110, color:'secondary.main'}}>
        </Box>     */}
      <Headermain />
      <Drawerbar />
      <Box
      component="form" 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mt:1,
        }}
      >
        {/* <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        mb: 1.5
        }}>
          <Box sx={{ p: 2, width: drawerWidth, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Name :
            </Typography>
          </Box>
          <Box sx={{ flexGrow:1, border: 2, borderColor: 'primary.main', borderRadius: 1, justifyContent: 'flex-end', }} >
          <TextField
          value="User"
          variant="outlined"
          id="outlined-basic"
          />
          </Box>
        </Box>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mb: 1.5
        }}>
          <Box sx={{ p: 2, width: drawerWidth, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Contact No. :
            </Typography>
          </Box>
          <Box  >
          <TextField
          required
          variant="outlined"
          id="outlined-basic"
          label="Required"
          type="number"
          placeholder="Enter contacr no."
          />
          </Box>
        </Box> */}
        <Qbox />
        <Qbox />
        {/* <Post /> */}
      </Box>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default Homepage;