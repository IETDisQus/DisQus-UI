import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Uname from "../RegisterComponents/Uname";
import Contact from "../RegisterComponents/Contact";
import Branch from "../RegisterComponents/Branch";
import Section from "../RegisterComponents/Section";
import Social from "../RegisterComponents/Social";
import Skills from "../RegisterComponents/Skills";

const drawerWidth=300

const RegisterProfile = () =>{
    return (
        <>
        <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        borderRadius: 2,
        width: 1,
        alignItems: 'stretch',
        ml: 2,
        mb: 1,
        p:1
        }}>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mb: 1
        }}>
          <Box sx={{ p: 2,ml:48, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h4">
              Update Profile First
            </Typography>
          </Box>
        </Box>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        }}>
          <Uname />
        </Box>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        }}>
        <Contact />
        </Box>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        }}>
          <Branch />
        </Box>

        <Box sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            }}>
              <Section />
            </Box>

            <Box sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            }}>
              <Skills />
            </Box>

          <Box sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          }}>
          <Social />
        </Box>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mb: 1.5
        }}>
          <Box sx={{ p: 0.5, ml:60, borderRadius:2, backgroundColor: 'primary.main' , textAlign: 'center', color: 'secondary.main'  }}>
          <Button variant="filled" >
            <Typography variant="h6">
              Update
            </Typography>
            </Button>
          </Box>
        </Box>


        </Box>
        
        </>
    )
}

export default RegisterProfile;