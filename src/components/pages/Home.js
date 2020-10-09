import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import GridLayout from '../layout/GridLayout';
import BlogCard from '../ui/BlogCard';


const styles = theme => ({
  homeBox: {
    backgroundColor: "rgb(227, 236, 246)",
    width: "100%",
    minHeight:"90vh"
  },
  container: {
    minHeight:"90vh"
  }
});


class Home extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper square className={classes.homeBox}>
        <Container className={classes.container}>
          <GridLayout>
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

export default withStyles(styles)(Home);
