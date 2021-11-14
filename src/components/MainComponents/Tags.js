import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'C',
    'C++',
    'Java',
    'Python',
    'React',
    'MySQL',
    'Spring',
    'Hibernate',
    'React Native',
    'Android',
  ];

  function getStyles(name, personName, theme) {
    return {  
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
    
  }

  const Tags = () =>{
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return(
        <>
            <Select 
              placeholder="Add your Skills"
              sx={{ width:224 }}
              id="tags"
              multiple
              value={personName}
              onChange={handleChange}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} sx={{ color: '#3E432E', backgroundColor: '#A7D129', fontWeight: 'bold' }}/>
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
              >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
              </Select>

        </>
    )
}

export default Tags;