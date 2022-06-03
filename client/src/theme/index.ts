import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          backgroundColor: blue[300],
          color: blue[300],
        },
      },
    },
  },
});

export default theme;
