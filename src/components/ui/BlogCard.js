import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import withNeumorphism from './withNeumorphism';


const useStyles = makeStyles(
  theme=> ({
    blogCard: {
      margin: "8px 8px 0px 8px",
      height: "100%",
      
    }
  })
);

const BlogCard = (props) => {

  const classes = useStyles();

  return ( 
    <Card
      className={classes.blogCard}
      style={props.style}>
      <h1>
        
     </h1>
    </Card>
   );
}
 
export default withNeumorphism(BlogCard);