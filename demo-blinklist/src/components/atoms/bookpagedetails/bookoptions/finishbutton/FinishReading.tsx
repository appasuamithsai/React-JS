import { Button } from "@mui/material";

import { Link, BrowserRouter as Router } from "react-router-dom";

interface Handle {
  handleFinish: (item: string) => void;
  bookName: string;
  btn: boolean;
}

const FinishReading = (props: Handle) => {
  const set = () => {
    props.handleFinish(props.bookName);
  };
  return (
   
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            color: "#03314B",
            backgroundColor: "#2CE080",
            textTransform: "none",
            borderColor: "none",
            display: props.btn ? "none" : "",
            "&:hover": {
              backgroundColor: "#2CE080",
            },
          }}
          onClick={set}
          variant="contained"
        >
          Finished Reading
        </Button>
      </Link>
  );
};

export default FinishReading;
