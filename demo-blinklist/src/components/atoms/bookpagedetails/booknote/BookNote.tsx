import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "36px",
      fontWeight: 700,
      color: "#03314B",
    },
  },
});

const BookNote = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#03314B",
        }}
        variant="subtitle2"
      >
          Turning Your Business into an Enduring Great Company
      </Typography>
    </ThemeProvider>
  );
};

export default BookNote;
