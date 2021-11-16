import { TextField, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import { AccountCircle } from "@mui/icons-material";

const boxWidth=520

const SendInvite = () =>{
    return (
        <>
        <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        backgroundColor: '#3E432E',
        borderRadius: 2,
        alignItems: 'stretch',
        mb: 1,
        p:1
        }}>
          <Box 
          sx={{ 
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          border: 1,
          borderRadius:2, 
          mb:1 
          }}>
            <Box>
                <AccountCircle sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            variant="standard"
            placeholder="Type name here ..."
            sx={{ width:470 }}
            />
            </Box>  
          </Box>

          <Box 
          sx={{ 
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          border: 1,
          borderRadius:2, 
          mb:1    
          }}>
            <Box>
                <DescriptionIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            multiline
            rows={2}
            maxRows={7}
            variant="standard"
            placeholder="Event Description ..."
            sx={{ width:470 }}
            />
            </Box>  
          </Box>
          
          <Box 
          sx={{ 
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          border: 1,
          borderRadius:2, 
          mb:1      
          }}>
            <Box>
                <EventIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            type="date"
            variant="standard"
            placeholder="Event Date ..."
            sx={{ width:300 }}
            />
            </Box>  
          </Box>

          <Box 
          sx={{ 
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          border: 1,
          borderRadius:2, 
          mb:1      
          }}>
            <Box>
                <AccessTimeIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            type="time"
            variant="standard"
            placeholder="Event Time ..."
            sx={{ width:300 }}
            />
            </Box>  
          </Box>

          <Box 
          sx={{ 
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          border: 1,
          borderRadius:2, 
          mb:1      
          }}>
            <Box>
                <PlaceIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            multiline
            rows="2"
            maxRows="4"
            variant="standard"
            placeholder="Event Venue ..."
            sx={{ width:470 }}
            />
            </Box>  
          </Box>

        </Box>
        </>
    )
}

export default SendInvite;