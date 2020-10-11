import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
/*import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import BlogCard from '../ui/BlogCard';*/



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
  },
  grid: {
    marginTop: "0",
    paddingTop:"1em",
    paddingBottom:"3em",
    minHeight:"90vh",
    backgroundColor:"transparent",
  },
  gridContainer: {
    margin:0,
  },
  gridItem: {
    margin:0,
    backgroundColor: "transparent",
    [theme.breakpoints.down('xs')]: {
      maxHeight:"30vh"
    },
    border:"1px red solid"
  },
  gridSubitem: {
    border:"1px blue solid"
  },
  gridSizing1: {
    margin:0,
    minHeight:"38vh"
  },
  gridSizing2: {
    margin:0,
    minHeight:"51vh"
  },
  gridSizing3: {
    margin:0,
    minHeight:"99vh",
  },
}));

const GridLayout = (props) => {

  const classes = useStyles();

  return (
    <Grid
    justify="space-evenly"
      spacing={1}
      className={classes.grid} container>
      <Grid
        className={classes.gridSizing1}
        item
        container
        spacing={2}
      >
        <Grid
          className={classes.gridItem}
          xs={12}
          sm={9}
          item
        >
          {props.children[0]}
        </Grid>
        <Hidden xsDown>
          <Grid
            className={classes.gridItem}
            xs={12}
            sm={3}
            item
          > 
            {props.children[1]}
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        className={classes.gridSizing2}
        item
        container
      >
          <Grid
            xs={12}
            sm={4}
            item
            container
            spacing={2}
            className={classes.gridItem}
          >
            <Grid
            xs={12}
            className={classes.gridSubitem}
            item
            >
              {props.children[2]}
            </Grid>
          </Grid>
        <Grid
          xs={12}
          sm={8}
          className={classes.gridItem}
          spacing={2}
          container
          item
        >
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={6}
            item
          >
            {props.children[3]}
          </Grid>
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={6}
            item
          >
            {props.children[4]}
          </Grid>
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={8}
            item
          >
            {props.children[5]}
          </Grid>
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={4}
            item
          >
            {props.children[6]}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.gridSizing3}
        item
        container
      >
        <Grid
            xs={12}
            sm={3}
            container
            item
            spacing={2}
            className={classes.gridItem}
          >
            <Grid
            xs={12}
            className={classes.gridSubitem}
            item
            >
              {props.children[7]}
            </Grid>
          </Grid>
        <Grid
          xs={12}
          sm={9}
          className={classes.gridItem}
          spacing={2}
          container
          item
        >
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={6}
            item
          >
            {props.children[8]}
          </Grid>
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={6}
            item
          >
            {props.children[9]}
          </Grid>
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={8}
            item
          >
            {props.children[10]}
          </Grid>
          <Grid
            className={classes.gridSubitem}
            xs={12}
            sm={4}
            item
          >
            {props.children[11]}
          </Grid>
        </Grid>
        <Grid
            xs={12}
            sm={8}
            item
            container
            spacing={2}
            className={classes.gridItem}
          >
            <Grid
            xs={12}
            className={classes.gridSubitem}
            item
            >
              {props.children[12]}
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sm={4} item
            container
            spacing={2}
            className={classes.gridItem}
          >
            <Grid
            xs={12}
            className={classes.gridSubitem}
            item
            >
              {props.children[13]}
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default GridLayout;
