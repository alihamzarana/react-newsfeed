import {Container, Fab, makeStyles, Modal, Tooltip } from '@material-ui/core'
import React , {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Add from '@material-ui/icons/Add';


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
        margin: "auto"

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


    return (
        < >
        <Tooltip title="Add" aria-label="add">
         <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
           <Add/>
         </Fab>
       </Tooltip>
       <Modal open={open}>
           <Container className={classes.container}>modal</Container>
       </Modal>
        </>
    )
}

export default Adds
