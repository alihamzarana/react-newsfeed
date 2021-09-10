import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import React, {useState} from 'react'

const useStyles = makeStyles((theme)=> ({

    toolBar:{
        display:"flex",
        justifyContent:"space-between"

    },

    search:{
        display:"flex",
        alignItems:"center",
         background: alpha(theme.palette.common.white, 0.15),
         "&:hover":{
             background: alpha(theme.palette.common.white, 0.25),
         },
         borderRadius: theme.shape.borderRadius,
         width: "30%",

        [ theme.breakpoints.down("sm")]:{
            display: ((props) => ( props.open? "flex": "none")),
            width: "60%"
        }


    },

    input:{
        color: "white",
        marginLeft: theme.spacing(1)
    },

    logoLg:{
        display: 'none',
        [theme.breakpoints.up("sm")]:{
            display:"block"
        }
    },
    logoSm:{
        display: 'block',
        [theme.breakpoints.up("sm")]:{
            display:"none",
        }

    }, 
    icons:{
        
        alignItems:"center",
        display:((props) => (props.open? "none": "flex"))
    },
     badge:{
         marginRight:  theme.spacing(2)
         
     },
     searchButton:{
         marginRight: theme.spacing(2),
         [theme.breakpoints.up("sm")]:{
             display:"none"
         }
     },
     cancel:{

        [theme.breakpoints.up("sm")]:{
            display: "none"
        }

     }


}))

export const Navbar = () => {
    

   const [open, setOpen] = useState(false)
   const classes = useStyles({open});
    return (
        <AppBar>
            <Toolbar className={classes.toolBar}>
                <Typography variant='h6' className={classes.logoLg}>
                    Ali Hamza
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    Rana
                </Typography>
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder="Search..." className={classes.input}/>  
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                    <Badge badgeContent={4} color="secondary" className={classes.badge} >
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications/>
                    </Badge>
                    <Avatar></Avatar>
                </div>
                

            </Toolbar>
        </AppBar>
    )
}
