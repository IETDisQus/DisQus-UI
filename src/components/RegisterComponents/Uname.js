import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const drawerWidth=300


const Uname = () => {
    return(
        <>
        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mb: 1.5
        }}>
          <Box sx={{ p: 2, width: drawerWidth, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Name :
            </Typography>
          </Box>
          <Box sx={{ flexGrow:1, border: 2, borderColor: 'primary.main', borderRadius: 1 }} >
          <TextField
          value="User"
          variant="outlined"
          id="outlined-basic"
          />
          </Box>
        </Box>
        </>
    )
}

export default Uname;