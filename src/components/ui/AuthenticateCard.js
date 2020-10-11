import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import { Formik, Form, Field, ErrorMessage } from 'formik';
 //import * as Yup from "yup";
import withNeumorphism from '../ui/withNeumorphism';



export const CLIENT_ID = "621992783326-h6seua4jiqsf1fbpufkroc5kj1rvvdjd.apps.googleusercontent.com";


const useStyles = makeStyles((theme) => ({
  blogCard: {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    margin: "8px 8px 0px 8px",
    height:"100%"
  }
}));

const AuthenticateCard = (props) => {

  const classes = useStyles(props);
  return ( 
    <Card
    className={classes.blogCard}
      style={props.style}
    >
      <Button
      component={Link}
      to="/createpost"
      variant="contained" color="primary"
      >
        Write
      </Button>
    </Card>
   );
}
 
export default withNeumorphism(AuthenticateCard);

