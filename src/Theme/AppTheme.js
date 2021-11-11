const { createTheme } = require("@mui/system");

const theme = createTheme({
    palette :{
        primary : {
            main : '#A7D129',
            contrastText : '#fff',
        },
        secondary:{
            light: '#616F39',
            main: '#3E432E',
            contrastText :'#fff'
        }

    }
})

export default theme;