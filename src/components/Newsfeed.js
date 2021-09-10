import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import Posts from './Posts';



const useStyle= makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10)
       
    }

}))
const Newsfeed = () => {
    const classes = useStyle();
    return (
       <Container className={classes.container} >
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
       </Container>
    )
}

export default Newsfeed
