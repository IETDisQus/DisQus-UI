import { Chip, IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import VerifiedIcon from '@mui/icons-material/Verified';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const boxWidth=1095

const Qbox = () =>{
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
            <Box sx={{ flexGrow:1, ml:6 }} >
                <Typography variant="body1" color="white" >How to make a jar from a spring boot project?</Typography>
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
            <Box sx={{ ml:6 }} >
                <IconButton sx={{ color: '#A7D129' }} >
                <VerifiedIcon sx={{ fontSize: 25 }}/>
                </IconButton>
            </Box>  
            <Box sx={{ ml:6 }} >
                <IconButton sx={{ color: '#A7D129' }} >
                <QuestionAnswerOutlinedIcon sx={{ fontSize: 25 }}/>
                </IconButton>
            </Box>  
            <Box sx={{ flexGrow:1, ml:6 }} >
                <Chip label="Answered" sx={{ color: '#3E432E', backgroundColor: '#A7D129', fontWeight: 'bold' }}/>
            </Box>  
          </Box>
        </Box>
        
        </>
    )
}

export default Qbox;