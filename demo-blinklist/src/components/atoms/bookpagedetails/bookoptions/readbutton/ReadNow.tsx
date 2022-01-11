import { Button  } from "@mui/material";



const ReadNow = () => {
  return (
      <Button
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#22C870",
          borderColor:'#111',
          textTransform:'none',
        }}
        variant="outlined"
      >
       Read now
      </Button>
  );
};  

export default ReadNow;
