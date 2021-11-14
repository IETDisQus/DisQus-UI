import { IconButton, TextField, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Tags from "./Tags";

const boxWidth=1095

const Post = () =>{
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
                <PostAddIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
                <Typography variant="h6" >Post Your Query Here !</Typography>
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
                placeholder="Please write your Query here ..."
                sx={{ width:1000, backgroundColor: 'black', border: 0.7, borderRadius:1, borderColor: '#A7D129' }}
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
            <Box sx={{ ml:6, backgroundColor:'#A7D129', color: 'black', fontSize: 25, width: 1002, borderRadius: 1 }} >
                <IconButton>
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
                <Typography variant="h6" sx={{ color: '#A7D129' }}>Tags : </Typography>
            </Box>  
            <Box sx={{ flexGrow:1, ml:6, }} >
              <Tags />
            </Box>
            <Box sx={{ flexGrow:1, ml:35 }} >
            <Button variant="filled" sx={{ backgroundColor: '#A7D129', color: '#3E432E', p:2, width:150, height:55, borderRadius: 5 }} >
            <Typography variant="h6">
              Post
            </Typography>
            </Button>
            </Box>  
          </Box>
        </Box>
        </>
    )
}

export default Post;