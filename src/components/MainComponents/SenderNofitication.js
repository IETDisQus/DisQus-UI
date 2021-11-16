import { Chip, Accordion, AccordionDetails, AccordionSummary, IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Abox from "./Abox";
import DraftsIcon from '@mui/icons-material/Drafts';
import SendInvite from "./SendInvite";

const boxWidth=1075

const SenderNotification = () =>{
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
                <DraftsIcon sx={{ fontSize: 30 }} />
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
                <Typography variant="h6" >Invitation Reply</Typography>
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
            <Chip label="Accepted" 
             sx={{ backgroundColor: '#A7D129', color: '#3E432E', fontWeight: 'bold', fontSize: 'large', mr:1, mb:1, mt:2}} />
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

export default SenderNotification;