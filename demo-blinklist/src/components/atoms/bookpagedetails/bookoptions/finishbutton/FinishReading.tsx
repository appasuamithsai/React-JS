import { Button  } from "@mui/material";

interface Handle{
  handleFinish:(item:string)=>void;
  bookName:string;
}

const FinishReading = (props:Handle) => {
  return (
      <Button
        sx={{
          fontWeight: 500,
          fontSize: "16px",
          color: "#03314B",
          backgroundColor:'#2CE080',
          textTransform:'none',
          borderColor:'none',
          '&:hover': { 
            backgroundColor:'#2CE080',
      
          }
        }}
        onClick={()=> props.handleFinish(props.bookName)}
        variant="contained"


      >
       Finished Reading
      </Button>
  );
};  

export default FinishReading;
