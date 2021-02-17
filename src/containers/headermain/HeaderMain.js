import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../../assets/images/gc-logo.png"
import UserMenu from "../../components/UserMenu"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: "0",
    zIndex: 999,
    width: "100%"
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  menu: {
    flexGrow: 3,
  },
  title: {
    flexGrow: 2,
  },
}));



export default function HeaderMain() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#f2f7f9"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="logo" style={{height: "46px"}} />
            {/* <h1>GC</h1> */}
            {/* <span>{`(min-width:600px) matches: ${mobileMenu}`}</span> */}
          </Typography>
          
          {/* <UserMenu /> */}
              
              <div className={classes.menu} style={{marginRight: "20px"}}>
              <Button>Home</Button>
              <Button>Services</Button>
              <Button>About Us</Button>
              <Button>Contact Us</Button>
              
            </div>
            <UserMenu />
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

