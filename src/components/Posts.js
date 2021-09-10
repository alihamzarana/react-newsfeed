import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'



const useStyle= makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10)
       
    },
    card:{
        marginBottom: theme.spacing(4)
    },

    media:{
        height: "350px",
        [theme.breakpoints.down("sm")]:{
            height:"200px"
        }
    }

}))
const Posts = () => {
    const classes = useStyle();

    return (
       <Card className={classes.card} >
           <CardActionArea>
               <CardMedia 
               className={classes.media}
               title="My Post"
               image="https://source.unsplash.com/random"
               />
           </CardActionArea>
           <CardContent>
               <Typography gutterBottom variant="h5">My first Post</Typography>
               <Typography variant="body">
               Today I was passing through an intersection on College Road Lahore and I saw two Traffic Police Wardens whose uniforms were dripping with rainwater and they were still performing their duty with firmness. I was amazed that in such a heavy rain (at the time of the video rain just stopped) where everyone is looking for shelter and they are on duty and they are obeying with full dedication. I was forced to stop there and did a humble effort to show the positive side of the police.
               </Typography>
           </CardContent>
           <CardActions>
               <Button size="small" color="primary">Share</Button>
               <Button size="small" color="primary">Learn More</Button>

           </CardActions>

       </Card>
    )
}

export default Posts
