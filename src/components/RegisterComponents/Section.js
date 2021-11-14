import { Typography, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";

const Section = () => {
    return(
        <>
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
              <Box  >
              <Select
              id="section"
              //value={age}
              // label="Age"
              // onChange={handleChange}
              sx={{ width:224 }}
              >
              <MenuItem value={"None"}>None</MenuItem>
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              </Select>
              </Box>
            </Box>
            </>
    )
}

export default Section;