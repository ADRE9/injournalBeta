import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ImageIcon from '@material-ui/icons/Image';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import ClearIcon from '@material-ui/icons/Clear';
import { Formik/*, Form, Field, ErrorMessage */} from 'formik';
//import * as Yup from "yup";

const styles = theme => ({
  homeBox: {
    backgroundColor: "rgb(227, 236, 246)",
    width: "100%",
    minHeight:"90vh"
  },
  container: {
    paddingTop: "3rem",
    paddingBottom:"3rem",
    minHeight: "90vh",
    [theme.breakpoints.down('xs')]: {
      paddingTop: "5rem",
      paddingBottom: "5rem",
      minHeight: "100vh",
    }
  },
  speedDial: {
    position: 'relative',
    '&.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      bottom: theme.spacing(2)
    },
    inputMargin: {
      margin:"3rem 0rem 3rem 0rem"
    },
  },
});

class PostCreate extends React.Component {

  state = {
    direction: "right",
    open: false,
    hidden: false,
    pageList: [],
  }

  actions = [
    {icon: <ViewHeadlineIcon onClick={() => this.addParagraphOnClick()} />, name: 'Paragraph'
    },
    { icon: <ImageIcon onClick={() => this.addImageOnClick()}/>, name: 'Image' },
    { icon: <ImageSearchIcon />, name: 'Image Search Using Unsplash' },
    { icon: <SaveIcon />, name: 'Save' },
  ];

  addImageOnClick = () => {
    this.setState({
      pageList: this.state.pageList.concat(
        [
          <Container>
              <img style={{"marginTop":"2rem","maxWidth":"100%"}} alt="img" src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"/>
          </Container>
        ]
    )})
  };


  addParagraphOnClick = () => {
    this.setState({
      pageList: this.state.pageList.concat([
          <React.Fragment>
            <Formik key={`${this.state.pageList.length}PT`}>
              <form style={{ "marginTop": "1rem" }} autoComplete="off">
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="paragraphTitle">Paragraph Title(optional)</InputLabel>
                  <OutlinedInput
                    multiline
                    rowsMax={2}
                    id="paragraphTitle"
                    type='text'
                    //value={values.password}
                    //onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={180}
                  />
                </FormControl>
              </form>
            </Formik>
            <Formik key={`${this.state.pageList.length}P`}>
              <form style={{ "marginTop": "1rem" }} autoComplete="off">
                <FormControl fullWidth variant="outlined">
                  <InputLabel required htmlFor="paragraphTitle">Paragraph(*required)</InputLabel>
                  <OutlinedInput
                    multiline
                    rowsMax={10}
                    rows={10}
                    id="paragraphTitle"
                    type='text'
                    //value={values.password}
                    //onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={180}
                  />
                </FormControl>
              </form>
            </Formik>
          </React.Fragment>]
      ,
    )});
  };

  handleHiddenChange = (event) => {
    this.setState({hidden:event.target.checked});
  };

  handleClose = () => {
    this.setState({open:false});
  };

  handleOpen = () => {
    this.setState({open:true});
  };
  
  
  render() { 
    console.log(this.state.pageList);
    const { classes } = this.props;
    return ( 
      <Paper square className={classes.homeBox}>
        <Container className={classes.container}>
              <Formik>
                <form autoComplete="off">
                  <FormControl fullWidth   variant="outlined">
                    <TextField
                      id="Title"
                      variant="outlined"
                      label="Title(*required)"
                      multiline
                      rowsMax={2}
                      color="primary"
                    >
                    </TextField>
                  </FormControl>
                </form>
              </Formik>
          {this.state.pageList.map(element => {
            return element;
              })}
              <SpeedDial
                  ariaLabel="SpeedDial example"
                  className={classes.speedDial}
                  hidden={this.state.hidden}
                  icon={<SpeedDialIcon />}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  open={this.state.open}
                  direction={this.state.direction}
                >
                  {this.actions.map((action) => (
                  <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={this.handleClose}
                  />
                  ))}
              </SpeedDial>
        </Container>
      </Paper>
     );
  }
}
 
export default withStyles(styles)(PostCreate);
 