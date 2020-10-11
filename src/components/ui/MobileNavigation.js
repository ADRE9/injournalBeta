import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/svg/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import DevicesIcon from '@material-ui/icons/Devices';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width:"100%",
    top: 'auto',
    bottom: 0,
    zIndex:"100"
  },
  logo: {
    height: "2rem",
    marginLeft:"0",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom:"3em"
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  tabContainer: {
    display:"flex",
    margin: "auto",
    width: "100%",
  },
  tab: {
    
  }
}));


export default function BackToTop(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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


  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Button
            disableRipple
            to="/"
            //variant=""
            component={Link}>
            
            <img
              className={classes.logo}
              src={logo}
              alt="logo" />
            </Button>
        </Toolbar>
      </AppBar>
      <AppBar>
      <BottomNavigation
        value={value}
        onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Recents" value="recents" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<DevicesIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<SportsEsportsIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<DescriptionIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<SearchIcon />} />
      </BottomNavigation>
      </AppBar>
    </React.Fragment>
  );
}
/**<IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          
          <IconButton edge="end" color="inherit">
            <AccountTreeIcon />
          </IconButton>
          
          
          
          
          <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Tabs
          indicatorColor="secondary"
          onChange={handleChange}
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          className={classes.tabContainer}
          >
            <IconButton
              className={classes.tab}
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              className={classes.tab}
              color="inherit"
            >
              <DevicesIcon />
            </IconButton>
            <IconButton
              className={classes.tab}
              color="inherit"
            >
              <SportsEsportsIcon />
            </IconButton>
            <IconButton
            className={classes.tab}
              color="inherit">
              <DescriptionIcon />
            </IconButton>
            <IconButton
              className={classes.tab}
              color="inherit"
            >
              <AccountTreeIcon />
            </IconButton>
            <IconButton
              className={classes.tab}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          </Tabs>
        </Toolbar>
      </AppBar>*/