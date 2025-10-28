import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main:'#4f8f3e',
    },
  },
  typography:{
    fontFamily:   
            //"Helvetica Neue",
            // '-apple-system',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
             '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',"Helvetica Neue"
  }
});


theme = responsiveFontSizes(theme);


export default theme;