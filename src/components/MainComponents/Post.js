import { Chip, IconButton, TextField, Tooltip, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import VerifiedIcon from '@mui/icons-material/Verified';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Skills from "../RegisterComponents/Skills";

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
          mb:1  
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
          mb: 1  
          }}>
            {/* <Box sx={{ ml:6 }} >
                <Typography>Add Tags :</Typography>
            </Box>   */}
            <Box sx={{ ml:6 }} >
                <Skills />
            </Box>  
            <Box sx={{ flexGrow:1, ml:35 }} >
            <Button variant="filled" sx={{ backgroundColor: '#A7D129', color: '#3E432E', width:100, height:40, borderRadius: 5 }} >
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