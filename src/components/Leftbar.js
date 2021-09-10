import { Container, makeStyles, Typography } from '@material-ui/core'
import { Bookmark, ExitToApp, Home, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@material-ui/icons';
import React from 'react'


const useStyle= makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        position:"sticky",
        top:"0",
        [theme.breakpoints.up("sm")]:{
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"
        }       
    },
    item:{
        display: "flex",
        alignItems:"center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom: theme.spacing(3),
            cursor: "pointer"
        }
    }, 
    icon:{
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize:"18px"
        }
    },
    text:{
        fontWeight: "500",
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }
}))

const Leftbar = () => {

    const classes = useStyle();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>
                    Home Page
                </Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text}>
                    Friends
                </Typography>
            </div>
            <div className={classes.item}>  
                <PhotoCamera className={classes.icon}/>
                <Typography className={classes.text}>
                    Camera
                </Typography>
            </div>
            <div className={classes.item}>  
                <PlayCircleOutline className={classes.icon}/>
                <Typography className={classes.text}>
                    Video
                </Typography>
            </div>
            <div className={classes.item}>  
                <TabletMac className={classes.icon}/>
                <Typography className={classes.text}>
                    Apps
                </Typography>
            </div>
              <div className={classes.item}>  
                <Bookmark className={classes.icon}/>
                <Typography className={classes.text}>
                   Collections
                </Typography>
            </div>
            <div className={classes.item}>  
                <Storefront className={classes.icon}/>
                <Typography className={classes.text}>
                   Market place
                </Typography>
            </div>
            <div className={classes.item}>  
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>
                    Setting
                </Typography>
            </div>
            <div className={classes.item}>  
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>
                   Logout
                </Typography>
            </div>
        </Container>
    )
}

export default Leftbar
