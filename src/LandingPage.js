import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import logofinal from "./resources/DisQusLogo/logofinal.jpg";

const styles = {
    page1:{
        backgroundColor: "#000000",
        height: "100vh",
        flex : 1
    },
    page2 :{
        backgroundColor: "#A7D129",
        height: "100vh",
        flex:1,
        position : "relative"
    },
    page:{
        display : "flex",
        flexDirection: "row",
        justifyContent : "center",
        zIndex : -1,
        position : "relative"
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
       textALign : "center",
       backgroundColor : "#000000",
       zIndex : 10,
       position : "relative"

    }
}


export default function LandingPage() {
    return (
        <React.Fragment>
            <div style={styles.logo}>
                <img src={logofinal} />
            </div>
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
              <button style={styles.signinbutton}>
                <GoogleIcon style={{alignSelf:"flex-start"}} fontSize='medium'></GoogleIcon>
                <Typography >
                    Sign in with Google
                </Typography>
              </button>
            </div>
        </div>
        </React.Fragment>
        
    )
}
