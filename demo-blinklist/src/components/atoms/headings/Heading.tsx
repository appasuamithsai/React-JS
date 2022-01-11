import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#03314B",
    },
  },
});
  
const Heading = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        sx={{
          marginTop: "59px",
          marginLeft: "280px",
          fontSize: "24px",
          fontWeight: 700,
          color: "#03314B",
        }}
        variant="h3"
      >
        Trending blinks
      </Typography>
    </ThemeProvider>
  );
};

export default Heading;
