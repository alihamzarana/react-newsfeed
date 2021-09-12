import {Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core'
import React , {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Add from '@material-ui/icons/Add';
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles((theme) =>  ({

    container:{

        width:500,
        height:550,
        position:"absolute",
        backgroundColor: "white",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]:{
            width: "100vw",
            height: "100vh"

        }

    },

    form:{
       padding: theme.spacing(2)
    },

    item:{
        marginBottom: theme.spacing(3)
    },

    fab:{
        position:"fixed",
        bottom:20,
        right:20
    }

       
}))

const Adds = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const [openAlert, setOpenAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };


    return (
        < >
        <Tooltip title="Add" aria-label="add">
         <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
           <Add/>
         </Fab>
       </Tooltip>
       <Modal open={open}>
           <Container className={classes.container}>
           <form autoComplete="off">
           <div className={classes.item}>
             <TextField  label="Title" style={{width: "100%"}}/>
           </div>
           <div className={classes.item}>
             <TextField 
              label="Description" 
              style={{width: "100%"}}
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue="Tell your story..."
              variant="outlined"/>
           </div>
            <div className={classes.item}>
            <TextField select label="Visibility" value="Public">
                <MenuItem value="Public"> Public</MenuItem>
                <MenuItem value="Private"> Private</MenuItem>
                <MenuItem value="Unlisted"> Unlisted</MenuItem>    
            </TextField>
            </div>
            <div className={classes.item}>
            <FormLabel component="legend">Who can comment?</FormLabel>
               <RadioGroup >
               <FormControlLabel 
               value="everyone" 
               control={<Radio />} 
               label="Everyone" 
               size="small"
               />
               
               <FormControlLabel 
               value="myFriends" 
               control={<Radio />} 
               label="My Friends" />


              <FormControlLabel 
              value="noone" 
              control={<Radio />} 
              label="No one"
              size="small" />

             <FormControlLabel 
             value="custom" 
             disabled control={<Radio />} 
             label="Custom (Premium)"
             size="small" />
            </RadioGroup>

            </div>
            <div className={classes.item}>
                <Button variant="outlined" color="primary" style={{marginRight:"20px"}} onClick={() => setOpenAlert(true)}>Create</Button>
                <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>

            </div>
           </form>
           </Container>
       </Modal>
       <Snackbar
        open={openAlert} 
        autoHideDuration={4000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
        >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
        </>
    )
}

export default Adds
