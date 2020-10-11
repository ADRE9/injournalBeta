import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
//import Paper from '@material-ui/core/Paper';
//import Container from '@material-ui/core/Container';
//import GridLayout from '../layout/GridLayout';
//import BlogCard from '../ui/BlogCard';
import GridPageLayout from '../layout/GridPageLayout';


const styles = theme => ({
 
});


class Home extends Component {

  render() {
    //const { classes } = this.props;
    return (
      <React.Fragment>
        <GridPageLayout/>
      </React.Fragment>
    )
  }
};

export default withStyles(styles)(Home);