import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const Social = () =>{
    return (
        <>
        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mb: 1.5
        }}>
          <Box sx={{ p: 2, width: 300, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Social URLs :
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }} >
          <Box>
          <TextField
          variant="outlined"
          id="firstsocial"
          type="text"
          placeholder="First(if any)"
          />
          </Box>
          <Box>
          <TextField
          variant="outlined"
          id="secondsocial"
          type="text"
          placeholder="Second(if any)"
          />
          </Box>
          <Box>
          <TextField
          variant="outlined"
          id="thirdsocial"
          type="text"
          placeholder="Third(if any)"
          />
          </Box>
          </Box>
        </Box>
        </>
    )
}

export default Social;