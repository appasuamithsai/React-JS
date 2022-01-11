import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs, Typography } from "@mui/material";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import React,{useState} from "react";

const useStyles = makeStyles({
    tabStyle: {
      textTransform: "none",
      fontSize: 18,
      fontWeight: 700,
      textAlign:'left',
      width: 'auto',
      paddingRight:'150px',
      paddingBottom:'16px',
      margin: "8px 0px",
    },
    activeTab: {
      textTransform: "none",
      textAlign:'left',
      fontSize: 18,
      fontWeight: 400,
      width: 'auto',
      paddingRight:'150px',
      paddingBottom:'16px',
      position: "relative",
      left: 0,
    },
  });

const theme = createTheme({
    palette: {
      primary: {
        main: "#22C870",
      },
    },
  });

const BookDetailsTabs = () => {

  const [bool, setbool] = useState(false);
  const classes = useStyles();
  const [value, setvalue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setvalue(newValue);
    setbool(!bool);
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ marginLeft:'275px',marginTop:'40px'}}
        >
          <Tab label="Synopsis" value="1"  className={bool === true ? classes.activeTab : classes.tabStyle} />

          <Tab label="Who is it for?" value="2"   className={bool === true ? classes.activeTab : classes.tabStyle} />
          <Tab label="About the author" value="3"  className={bool === true ? classes.activeTab : classes.tabStyle} />
        </Tabs>
        <TabPanel value="1" sx={{padding:'0px',marginTop:'20px', marginLeft:'275px'}}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#03314B",
              width:'600px',
            }}
          >
            Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
          </Typography>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default BookDetailsTabs;
