import { Button, Accordion, AccordionDetails, AccordionSummary, IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import SendInvite from "./SendInvite";

const boxWidth=1075

const ReceiverNotification = () =>{
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
                <Tooltip title={<Typography variant="body1" color="white" >user@ietdavv.edu.in</Typography>} arrow>
                <EmailIcon sx={{ fontSize: 30 }} />
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
                <Typography variant="h6" >New Invite From -</Typography>
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
                <Tooltip title={<Typography variant="body1" color="white" >user@ietdavv.edu.in</Typography>} arrow>
                <AccountCircle sx={{ fontSize: 30 }} />
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
                <Typography variant="h6" >User</Typography>
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb:1  
          }}>
            <Box sx={{ ml:6 }} >
                <Typography variant="subtitle2" color="black">20:20 PM</Typography>
            </Box>  
            <Box sx={{ flexGrow:1, ml:6 }} >
                <Typography variant="subtitle2" color="black">2 days ago</Typography>
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb:1  
          }}>
            <Box sx={{ ml:6 }} >
            <Button variant="filled" sx={{ backgroundColor: '#A7D129', color: '#3E432E', p:2, width:100, height:35, borderRadius: 5 }} >
            <Typography variant="subtitle1">
              Accept
            </Typography>
            </Button>    
            </Box>
            <Box sx={{ ml:6 }} >
            <Button variant="filled" sx={{ backgroundColor: '#A7D129', color: '#3E432E', p:2, width:100, height:35, borderRadius: 5 }} >
            <Typography variant="subtitle1">
              Decline
            </Typography>
            </Button>    
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb: 1  
          }}>
            <Box sx={{ ml:6,  }} >
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}
                   sx={{ backgroundColor: '#616F39', color: '#A7D129', borderRadius: 1, borderColor: '#A7D129', border:1 }} >
                    <Typography sx={{ fontSize: 'large', fontWeight: 'bold',}} >See Invite</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'black', borderRadius: 1,width:1000 }}>
                    <SendInvite />
                  </AccordionDetails>
                </Accordion>
            </Box>  
          </Box>
          
        </Box>
        </>
    )
}

export default ReceiverNotification;