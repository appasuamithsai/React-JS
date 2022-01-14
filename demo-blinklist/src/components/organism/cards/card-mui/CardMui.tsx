import Card from "@mui/material/Card";
import { CardMedia, Grid, Typography } from "@mui/material";
import More from "../../../atoms/more/More";
import BookTitle from "../../../atoms/booktitle/BookTitle";
import AuthorName from "../../../atoms/author/AuthorName";
import ReadTime from "../../../molecule/read-time/ReadTime";
import ReadAgainButton from "../../../atoms/readagainbutton/ReadAgainButton";
interface Mui {
  details: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished:boolean,
  }[];
  handleReadAgain:(item:string)=>void;
}

const CardMui = (props: Mui) => {
  const bookCards = props.details.map((e) => (
    <Grid item>
      <Card>
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
          <Grid item>
            <More />
          </Grid>
          <Grid item>
            { !e.finished?(<Typography
              sx={{
                width: "294px",
                height: "15px",
                position: "relative",

                background: "#F1F6F4",
                border: "1px solid #E1ECFC",
                boxSizing: "border-box",
                borderRadius: "0px 0px 8px 8px",
              }}
            />):<ReadAgainButton handleReadAgain={props.handleReadAgain} />}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));

  return (
    <Grid columnSpacing="20px" rowSpacing="25px" container key="name">
      {bookCards}
    </Grid>
  );
};

export default CardMui;
