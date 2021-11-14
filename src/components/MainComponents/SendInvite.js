import { IconButton, TextField, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import Tags from "./Tags";
import { AccountCircle } from "@mui/icons-material";

const boxWidth=400

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
        width: 1,
        alignItems: 'stretch',
        ml: 2,
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
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <AccountCircle sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            variant="Standard"
            id="outlined-basic"
            placeholder="Type name here ..."
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
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <DescriptionIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            multiline
            rows={2}
            maxRows={7}
            variant="Standard"
            id="outlined-basic"
            placeholder="Type name here ..."
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
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <EventIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            variant="Standard"
            id="outlined-basic"
            placeholder="Type name here ..."
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
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <AccessTimeIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            variant="Standard"
            id="outlined-basic"
            placeholder="Type name here ..."
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
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <PlaceIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <TextField
            variant="Standard"
            id="outlined-basic"
            placeholder="Type name here ..."
            />
            </Box>  
          </Box>

        </Box>
        </>
    )
}

export default SendInvite;