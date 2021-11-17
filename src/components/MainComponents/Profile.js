import { Chip, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const drawerWidth=300

const Profile = () =>{
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
        mb: 1.5
        }}>
          <Box sx={{ p: 2, width: drawerWidth, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Name :
            </Typography>
          </Box>
          <Box sx={{ width:500, border: 2, borderColor: 'primary.main', borderRadius: 1 }} >
          <TextField
          value="User"
          variant="outlined"
          id="outlined-basic"
          sx={{ width: 500 }}
          />
          </Box>
        </Box>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mb: 1.5
        }}>
          <Box sx={{ p: 2, width: drawerWidth, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Contact No. :
            </Typography>
          </Box>
          <Box sx={{ width:500, border: 2, borderColor: 'primary.main', borderRadius: 1 }} >
          <TextField
          value="0000000000"
          variant="outlined"
          id="outlined-basic"
          sx={{ width: 500 }}
          />
          </Box>
        </Box>

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mb: 1.5
        }}>
          <Box sx={{ p: 2, width: drawerWidth, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Branch :
            </Typography>
          </Box>
          <Box sx={{ width:500, border: 2, borderColor: 'primary.main', borderRadius: 1 }} >
          <TextField
          value="CS"
          variant="outlined"
          id="outlined-basic"
          sx={{ width: 500 }}
          />
          </Box>
        </Box>

        <Box sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            mb: 1.5
            }}>
              <Box sx={{ p: 2, width: 300, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
                <Typography variant="h6">
                  Section :
                </Typography>
              </Box>
              <Box sx={{ width:500, border: 2, borderColor: 'primary.main', borderRadius: 1 }} >
              <TextField
                value="A"
                variant="outlined"
                id="outlined-basic"
                sx={{ width: 500 }}
              />
              </Box>
            </Box>

            <Box sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            mb: 1.5
            }}>
              <Box sx={{ p: 2, width: 300, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
                <Typography variant="h6">
                  Skills :
                </Typography>
              </Box>
              <Box >
                  {/* Iterate chips */}
                  <Chip label="Java" 
                  sx={{ backgroundColor: '#A7D129', color: '#3E432E', fontWeight: 'bold', fontSize: 'medium', mr:1, mt:2}} />
              </Box>
            </Box>

          <Box sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          mb: 1.5
          }}>
          <Box sx={{ p: 2, width: 300, backgroundColor: 'secondary.main' , textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h6">
              Social URLs :
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} >
              {/* Iterate chips */}
              <Chip label="email@gmail.com" 
               sx={{ backgroundColor: '#A7D129', color: '#3E432E', fontWeight: 'bold', fontSize: 'medium', mr:1, mt:2}} />
          </Box>
        </Box>

        </Box>
        
        </>
    )
}

export default Profile;