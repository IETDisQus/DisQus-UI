import { IconButton, TextField, Typography, Button, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const boxWidth=940

const Answer = () =>{
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
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <Tooltip title={<Typography variant="body1" color="white" >user@ietdavv.edu.in</Typography>} arrow>
                <QuestionAnswerIcon sx={{ fontSize: 30 }} />
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
            <Typography variant="h6" >Answer</Typography>
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          }}>
            <Box sx={{ flexGrow:1, ml:6 }} >
                <TextField 
                multiline
                rows={10}
                maxRows={20}
                variant="outlined"
                placeholder="White Answer Here ..."
                sx={{ width:890, backgroundColor: 'black', border: 0.7, borderRadius:1, borderColor: '#A7D129' }}
                />
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
            <Box sx={{ ml:6, backgroundColor:'#A7D129', color: 'black', fontSize: 25, width: 891, borderRadius: 1 }} >
                <IconButton >
                  <FormatBoldIcon />
                </IconButton>
                <IconButton>
                  <FormatItalicIcon />
                </IconButton>
                <IconButton>
                  <FormatUnderlinedIcon />
                </IconButton>
                <IconButton>
                  <AddPhotoAlternateIcon />  
                </IconButton>
                <IconButton>
                  <AttachFileIcon />  
                </IconButton>
                <IconButton>
                  <InsertLinkIcon />  
                </IconButton>
                <IconButton>
                  <InsertEmoticonIcon />  
                </IconButton>
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
            <Button 
            variant="filled" 
            sx={{ backgroundColor: '#A7D129', color: '#3E432E', p:2, ml:80, width:200, height:55, borderRadius: 5, mt:1 }} >
            <Typography variant="h6">
              Post Answer
            </Typography>
            </Button>
            </Box>  
          </Box>
        </Box>
        </>
    )
}

export default Answer;