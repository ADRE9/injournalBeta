import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#183F8C";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange:`${arcOrange}`
    },
    primary: {
      main:`${arcBlue}`,
    },
    secondary: {
      main:`${arcOrange}`,
    },
  },
  typography: {
    
  },
  
});