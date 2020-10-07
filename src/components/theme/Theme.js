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
    heroH1: {
      color: "white",
      fontFamily:"Times-New-Roman"
    },
    heroH2: {
      color: "white",
      fontWeight: "200",
      fontSize:"3rem",
      fontFamily:"Times-New-Roman"
    },
    heroH3: {
      color: "white",
      textAlign: "right",
      fontFamily:"Times-New-Roman"
    }
  },
  
});