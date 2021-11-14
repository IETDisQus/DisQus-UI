import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette :{
        mode: "dark",
        background: {
            default: "#000000",
            paper : '#A7D129',
          },
        primary : {
            main : '#A7D129',
            dark : '#616F39',
            contrastText : '#000',
        },
        secondary:{
            light: '#3E432E',
            main: '#000000',
            contrastText :'#fff',
        },
        text : {
            primary : '#fff',
        }
    },
    typography :{
        subtitle2 : {
            fontSize: '0.3rem'
        }
    }
})

export default theme;