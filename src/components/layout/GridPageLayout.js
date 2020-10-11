import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import GridLayout from './GridLayout';
import BlogCard from '../ui/BlogCard';
import AuthenticateCard from '../ui/AuthenticateCard';


const styles = theme => ({
  homeBox: {
    backgroundColor: "rgb(227, 236, 246)",
    width: "100%",
    minHeight: "90vh",
    [theme.breakpoints.down('xs')]: {
      padding:"3rem 0rem 2rem 0rem"
    }
  },
  container: {
    minHeight:"90vh"
  }
});


class GridPageLayout extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper square className={classes.homeBox}>
        <Container className={classes.container}>
          <GridLayout>
            <BlogCard />
            <AuthenticateCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </GridLayout>
        </Container>
      </Paper>
    )
  }
};

export default withStyles(styles)(GridPageLayout);