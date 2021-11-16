import { AppBar, TextField, Toolbar, InputAdornment, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import logofinal from "../../resources/DisQusLogo/logofinal.jpg";
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth=300

const Headermain = () =>{
    return (
        <>
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`, backgroundColor: '#000000' }}>
          <Toolbar>
          <Box
            component="img"
            sx={{
              height: 80,
              width: 250,
              m: 0.7,
              p: 1,
                }}
            alt="DisQus"
            src={logofinal}
          />
          <Box component="span" sx={{ p: 1, ml:35, backgroundColor: 'secondary.main', flexGrow: 1, textAlign: 'center', color: 'primary.main'  }}>
              <TextField 
              variant="outlined" 
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                    <SearchIcon sx={{ color: '#A7D129', fontSize:28 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: '#616F39', borderRadius: 1 }}
              />
          </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: `calc(100% - ${drawerWidth}px)`, backgroundColor: 'primary.main', flexGrow: 1, height: 110, color:'secondary.main'}}>
        </Box>
        </>
    )
}

export default Headermain;