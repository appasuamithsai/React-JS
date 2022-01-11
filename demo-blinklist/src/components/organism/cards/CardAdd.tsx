import React from "react";
import customStyle from "../../Theme";
import BookTitle from "../../atoms/booktitle/BookTitle";
import AuthorName from "../../atoms/author/AuthorName";
import ReadTime from "../../molecule/ReadTime";
import AddIcon from "@mui/icons-material/Add";
import { Button, Card, CardMedia, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
interface Mui {
  details: {
    image: string;
    name: string;
    author: string;
    time: string;
  }[];
  handleLib:()=>void;
}

const useStyle = makeStyles({
  btnStyle: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "20px",
    fontSize: "16px",
    fontWeight: "500",
    
  },
});

const CardAdd = (props: Mui) => {
  const temp = useStyle();
  const classes = customStyle();
  const bookCards = props.details.map((e) => (
    <Grid item xs={4}>
      <Card className={classes.cardStyle}>
        <Grid container direction="column">
          <Grid item>
            <CardMedia
              component="img"
              height="292px"
              width="294.1px"
              image={e.image}
              alt="Book"
            />
          </Grid>
          <Grid item>
            <BookTitle bookName={e.name} />
          </Grid>

          <Grid
            item
            sx={{
              margin: " 16px 0px 0px 16px",
            }}
          >
            <AuthorName authName={e.author} />
          </Grid>
          <Grid
            item
            sx={{
              marginLeft: "17.67px",
              marginTop: "17.67px",
            }}
          >
            <ReadTime time={e.time} />
          </Grid>
          <Grid item sx={{marginTop:'10px',}}>
            <Button
              variant="text"
              startIcon={<AddIcon />}
              className={temp.btnStyle}
              onClick={()=>props.handleLib()}
              sx={{
                "&:hover": {
                  backgroundColor: "#0365F2",
                  color: "#FFFFFF",
                },
              }}
            >
              Add to library
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));

  return (
    <Grid
      columnSpacing="20px"
      rowSpacing="25px"
      container
      sx={{ marginTop: "25px", marginLeft: "259px", width: "950px" }}
    >
      {bookCards}
    </Grid>
  );
};

export default CardAdd;
