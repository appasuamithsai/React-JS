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

const BookTitle = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#03314B",
        }}
        variant="h1"
      >
        Beyond Entrepreneurship 2.0
      </Typography>
    </ThemeProvider>
  );
};

export default BookTitle;
