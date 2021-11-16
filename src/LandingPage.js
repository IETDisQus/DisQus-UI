import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import logofinal from "./resources/DisQusLogo/logofinal.jpg";
import { GOOGLE_AUTH_URL } from './constants/constant';

const styles = {
    page1:{
        backgroundColor: "#000000",
        height: "100vh",
        flex : 1,
        zIndex : 0
    },
    page2 :{
        backgroundColor: "#A7D129",
        height: "100vh",
        flex:1,
        position : "relative",
        zIndex : 0
    },
    page:{
        display : "flex",
        flexDirection: "row",
        justifyContent : "center",
    },
    intro:{
        color : "#A7D129",
        textAlign : "center",
        fontSize : "50px",
        paddingLeft : "200px",
        paddingRight : "200px",
        paddingTop : "350px"

    },
    para:{
        color:"#616F39",
        fontSize : "20px",
        textAlign :"center",
        paddingLeft : "200px",
        paddingRight : "200px",
    },
    signinbutton:{
        backgroundColor:"#000000",
        color : "white",
        padding : "7px",
        fontSize : "24px",
        borderRadius : "100px",
        margin: "0",
        position: "absolute",
        top: "50%",
        left : "30%",
        display : "flex",
        flexDirection : "row",
        width : "300px",
        justifyContent : "space-around"
    },
    logo:{
       zIndex : 1,
       position:"absolute",
        margin : 0,
        top : "10%",
        left : "35%"
    }
}


export default function LandingPage() {
   
    return (
        <React.Fragment>
            <img src={logofinal}  style={styles.logo} width="500px" height="150px" />
            <div style={styles.page}>
            <div style={styles.page1}>
                    <Typography style={styles.intro} >
                        Let's DisQus IETians
                    </Typography>
                    <Typography style={styles.para}>
                        Ask, solve, collaborate, spread.
                    </Typography>
            </div>
            <div style={styles.page2}>
              <a style={styles.signinbutton} href={GOOGLE_AUTH_URL}>
                <GoogleIcon style={{alignSelf:"flex-start"}} fontSize='medium'></GoogleIcon>
                <Typography >
                    Sign in with Google
                </Typography>
              </a>
            </div>
        </div>
        </React.Fragment>
        
    )
}
