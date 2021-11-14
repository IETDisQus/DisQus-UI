import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const drawerWidth=300


const Contact = () => {
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
        </Box>
        </>
    )
}

export default Contact;