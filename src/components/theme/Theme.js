import { createMuiTheme } from '@material-ui/core/styles';

const injournalBlue = "#183F8C";
const injournalRed = "#E5383B";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${injournalBlue}`,
      orange:`${injournalRed}`
    },
    primary: {
      main:`${injournalBlue}`,
    },
    secondary: {
      main:`${injournalRed}`,
    },
  },
  typography: {
    
  },
  
});