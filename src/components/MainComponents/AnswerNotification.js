import { Accordion, AccordionDetails, AccordionSummary, IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Abox from "./Abox";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const boxWidth=1075

const AnswerNotification = () =>{
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
                <QuestionAnswerIcon sx={{ fontSize: 30 }} />
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
                <Typography variant="h6" >Your Query is Answered By -</Typography>
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
          mb: 1  
          }}>
            <Box sx={{ ml:6,  }} >
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}
                   sx={{ backgroundColor: '#616F39', color: '#A7D129', borderRadius: 1, borderColor: '#A7D129', border:1 }} >
                    <Typography sx={{ fontSize: 'large', fontWeight: 'bold',}} >See Answer</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'black', borderRadius: 1,width:1000 }}>
                    <Abox />
                  </AccordionDetails>
                </Accordion>
            </Box>  
          </Box>
        </Box>
        </>
    )
}

export default AnswerNotification;