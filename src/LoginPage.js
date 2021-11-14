import './css/Home.css' 
import logofinal from "./resources/DisQusLogo/logofinal.jpg";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Info from "./resources/DisQusLogo/Info.jpg";

const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#A7D129',
      },
    },
  });

const LoginPage = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
        <img className='imagepos' src={logofinal} />
        <img className='infopos' src={Info} />
        <div className='leftBlock'>
            <h1>Let's DisQus IETians</h1>
        </div>
        <div className='rightBlock'>
            <Button className={"loginbtn"} variant="contained" startIcon={<GoogleIcon />}>
            <Typography variant="body1">
              Sign in with Google
            </Typography>
            </Button>
               <h2>Easy and fast solution to queries of students.</h2>
               <h2>Creation of college level community.</h2>
        </div>
        </ThemeProvider>
        </>
    )
}

export default LoginPage;