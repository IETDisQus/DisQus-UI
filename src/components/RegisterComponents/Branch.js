import { Typography, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";

const drawerWidth=300


const Branch = () => {
    return(
        <>
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
          <Box  >
          <Select
          id="branch"
          //value={age}
          // label="Age"
          // onChange={handleChange}
          sx={{ width:224 }}
          >
          <MenuItem value={"CS"}>CS</MenuItem>
          <MenuItem value={"IT"}>IT</MenuItem>
          <MenuItem value={"Mech"}>Mech</MenuItem>
          </Select>
          </Box>
        </Box>
            </>
    )
}

export default Branch;