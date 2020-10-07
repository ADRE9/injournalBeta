import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/styles';
import illustration from '../assets/img/svg/undraw.svg';
import skeleton from '../assets/img/svg/skeleton.svg';
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const useStyles = makeStyles(theme => (
  {
    box: {
      marginTop:"4em",
      backgroundImage: "radial-gradient(ellipse farthest-side at 10vw 90vh,#000000,#183F8C)",
      minHeight: "100vh",
    },
    heroH1: {
      ...theme.typography.heroH1,
      paddingTop: '1rem',
    },
    heroH2: {
      ...theme.typography.heroH2,
    },
    heroH3: {
      ...theme.typography.heroH3,
    },
    heroH4: {
      color: "white",
      textAlign:"right",
      fontFamily: "Roboto",
      marginTop:"3rem"
    },
    illustration: {
      position:"relative",
      marginTop:"1rem",
      maxWidth: "100%", 
      left:0
    },
    JumpBlog: {
      margin: "1em 0em 1em 0em",
    },
    skeleton: {
      marginTop:"2rem",
      maxWidth: "100%",
    },
    Link: {
      textDecoration: "none",
      color:"white"
    }
}));



const LandingPage = (props) => {


  const renderLandingPage = () => {
    return (
      <React.Fragment>
      <CssBaseline />
        <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
              <Typography variant="h6"><Link className={classes.Link} to="/">
              inJournal
              </Link></Typography>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
        <Box className={classes.box}>
          <Container>
            <Grid  container spacing={2}>
              <Grid item md={6} sm={12} xs={12}>
                <Typography
                className={classes.heroH1}
                variant="h1">
                Write Share Gain
                </Typography>
                <Typography
                className={classes.heroH2}
                variant="h3">
                Presenting to you a platform where you can socialize
                </Typography>
                <Button
                  component={Link}
                  to="/app"
                color="secondary"
                className={classes.JumpBlog}
                variant="contained">
                  JUMP TO BLOGS
                </Button>
                <img
                className={classes.illustration}
                src={illustration} alt="illustration" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <img
                className={classes.skeleton}
                  src={skeleton} alt="illustration" />
                <Typography
                  className={classes.heroH3}
                  variant="h2">
                Blogging was never this<br/>interesting before.
                </Typography>
                <Typography
                  className={classes.heroH4}
                  variant="h5">
                CREATE SHARE SAVE LIKE COMMENT 
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </React.Fragment>
    )
  };
  
  const classes = useStyles();
    return (
      
      
        <BrowserRouter>
        <Route path="/" exact component={() => renderLandingPage()} />
        <Route path="/app" exact componnt={App}/>
        </BrowserRouter>
       
    )
};

export default LandingPage;
/*<Container>
            <Box width="auto">
            
            </Box>
            <Box width="auto">
              <Typography
                className={classes.heroH2}
                variant="h2">
                Blogging was never this<br/>interesting before.
              </Typography>
            </Box>
            
            <br/>
            
            
        </Container> */