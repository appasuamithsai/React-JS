import { Button  } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const SendToKindle = () => {
  return (
      <Button
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          color: "#6D787E",
          textTransform:'none'
        }}
        endIcon={ <ArrowForwardIcon />}
        variant="text"
      >
       Send to Kindle
      </Button>
  );
};  

export default SendToKindle;
