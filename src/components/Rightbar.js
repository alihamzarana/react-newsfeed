import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import React from 'react'


const useStyles = makeStyles((theme) =>  ({

     container:{
         paddingTop: theme.spacing(10),
         position:"sticky",
         top:"0",

        
     },
     title:{
         fontSize: "16px",
         fontWeight: 500,
         color: "#555"
     },
     imageList:{
        width: 250,
        height: 350,
        
        
     },

     category:{
         marginTop:"20px"
     },

     link:{
         fontSize:"16px",
         color:"#555",
         marginRight:theme.spacing(2)

     }
       
}))

const Rightbar = () => {
    const classes = useStyles()

    const itemData= [1,2,3,,4,5,6,7, 8]


    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom> Online Friends</Typography>
            <AvatarGroup max={6} style={{marginBottom: "20px"}}>
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
            </AvatarGroup>


            <Typography gutterBottom className={classes.title}>Gallery</Typography>   
            <ImageList rowHeight={80} className={classes.imageList} cols={2}>
            {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1}>
                console.log(items.col)
                <img src="https://source.unsplash.com/random" alt="Gallery" />
            </ImageListItem>
            ))}
            </ImageList>

            <Typography className={classes.category} gutterBottom> Categories</Typography>
            <Link href="#" className={classes.link}  variant="body2">
                Sports
            </Link>
            <Link href="#" className={classes.link}  variant="body2">
                Movies
            </Link>
            <Link href="#" className={classes.link}  variant="body2">
                Food
            </Link>
            <Link href="#" className={classes.link}  variant="body2">
                Music
            </Link>
            
            <Divider flexItem style={{marginBottom: 5}}/>
            <Link href="#" className={classes.link}  variant="body2">
                Science
            </Link>
            <Link href="#" className={classes.link}  variant="body2">
                Islam
            </Link>
            <Link href="#" className={classes.link}  variant="body2">
                Nature
            </Link>
            

       
        </Container>
    )
}

export default Rightbar
