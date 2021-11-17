import { IconButton, TextField, Typography, Button, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const boxWidth=500

const Abox = () =>{
    return (
        <>
        <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        backgroundColor: '#3E432E',
        borderRadius: 2,
        mb: 1,
        p:1
        }}>
          <Box 
          sx={{ 
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <Tooltip title={<Typography variant="body1" color="white" >user@ietdavv.edu.in</Typography>} arrow>
                <AccountCircle sx={{ fontSize: 30 }} />
                </Tooltip>
            </Box>
            <Box sx={{ ml:1 }} >
            <Typography variant="h6" >User</Typography>
            </Box>  
          </Box>

          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          textAlign: 'left', color: 'primary.main',
          mb:1  
          }}>
            <Box sx={{ ml:6 }} >
                <Typography variant="subtitle2" color="black">20:20 PM</Typography>
            </Box>  
            <Box sx={{ ml:6 }} >
                <Typography variant="subtitle2" color="black">2 days ago</Typography>
            </Box>  
          </Box>
          
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          mb:1,
          textAlign: 'left', color: 'primary.main',
          }}>
            <Box sx={{ ml:6 }} >
                <TextField 
                multiline
                rows={10}
                maxRows={20}
                variant="outlined"
                value="See Answer ....."
                sx={{ width:890, backgroundColor: 'black', border: 0.7, borderRadius:1, borderColor: '#A7D129' }}
                />
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          textAlign: 'left', color: 'primary.main',
          mb: 1  
          }}>
            <Box sx={{ ml:6 }} >
              {/* Change color on verification and tooltip value */}
              <IconButton >
              <Tooltip title={<Typography variant="body1" color="white" >Verified</Typography>} arrow>
                <VerifiedIcon sx={{fontSize:27}}/>
              </Tooltip>
              </IconButton>
            </Box>  
            <Box sx={{ ml:6, }} >
              {/* Change color on first click and update x in tooltip*/}
              <IconButton >
                <Tooltip title={<Typography variant="body1" color="white" >x likes</Typography>} arrow>
                <ThumbUpIcon /> 
                </Tooltip>
                </IconButton>
            </Box>
          </Box>
        </Box>
        </>
    )
}

export default Abox;