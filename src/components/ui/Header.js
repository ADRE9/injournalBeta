import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'; 
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/svg/logo.svg';


function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 20 : 0,
  });
};


const useStyles = makeStyles(theme =>(
  {
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    logo: {
      "&:hover": {
        backgroundColor:"transparent"
      }
    },
    tabContainer: {
      marginLeft:"auto"
    },
    tab: {
      minWidth: 10,
      marginLeft:"25px"
    },
    appBarBottom: {
      top: 'auto',
      bottom: 0,
    },
  }
));


const Header = (props) => {

  const classes = useStyles();
  const [width, setWidth] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  }

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/tech' && value !== 1) {
      setValue(1);
    }else if (window.location.pathname === '/game' && value !== 2) {
      setValue(2);
    }else if (window.location.pathname === '/scripture' && value !== 3) {
      setValue(3);
    }else if (window.location.pathname === '/algos' && value !== 4) {
      setValue(4);
    }else if (window.location.pathname === '/about' && value !== 5) {
      setValue(5);
    }
  },[value]);

  useEffect(() => {
    setWidth(window.innerWidth);
  },[width]);

  const renderNavigation = () => {
  
    if (width > 540) {
      return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
              <AppBar position="static">
                <Toolbar>
                <Button
                  className={classes.logo}
                  disableRipple
                  onClick={()=>setValue(0)}
                    component={Link}
                    to="/"
                  >
                    <img src={logo} alt="logo" />
                  </Button>
                <Tabs
                    indicatorColor="primary"
                    onChange={handleChange}
                    value={value}
                    variant="scrollable"
                    scrollButtons="auto"
                    className={classes.tabContainer}>
                  <Tab
                    onChange={handleChange}
                    component={Link}
                      to="/"
                      className={classes.tab}
                      label="HOME" />
                  <Tab
                    component={Link}
                      onChange={handleChange}
                      to="/tech"
                      className={classes.tab}
                      label="TECH" />
                  <Tab
                    component={Link}
                      onChange={handleChange}
                      to="/game"
                      className={classes.tab}
                      label="GAME" />
                  <Tab
                    component={Link}
                      onChange={handleChange}
                      to="/scripture"
                      className={classes.tab}
                      label="SCRIPTURE" />
                  <Tab
                    component={Link}
                      onChange={handleChange}
                      to="/algos"
                      className={classes.tab}
                      label="ALGOS" />
                  <Tab
                    component={Link}
                      onChange={handleChange}
                      to="/about"
                      className={classes.tab}
                      label="ABOUT" />
                  </Tabs>
                </Toolbar>
              </AppBar>
            </ElevationScroll>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <AppBar
          position="fixed" color="primary"
          className={classes.appBarBottom}>
            <Toolbar>
              <IconButton         edge="start" color="inherit"    aria-label="open drawer">
                <MenuIcon />
              </IconButton>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton edge="end" color="inherit">
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )
    }
  };

  return ( 
    <React.Fragment>
      {renderNavigation()}
      {console.log(width)}
    </React.Fragment>
   );
}
 
export default Header;