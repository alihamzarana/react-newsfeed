import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import Adds from "./components/Adds";

import Leftbar from "./components/Leftbar";
import { Navbar } from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";
import Rightbar from "./components/Rightbar";

const useStyles = makeStyles((theme) => ({
   right:{

    [theme.breakpoints.down("sm")]:{
      display:"none"
    }

   }
}))
function App() {

  const classes = useStyles()
  return (
    <div>
      <Navbar/>
      <CssBaseline/>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Newsfeed/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar/> 
        </Grid>
      </Grid>
      <Adds/>
      
    </div>
  );
}

export default App;
