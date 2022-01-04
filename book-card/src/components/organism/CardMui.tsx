
import Card from '@mui/material/Card';
import {  CardMedia, Typography } from '@mui/material';
import BookTitle from '../atoms/BookTitle';
import AuthorName from '../atoms/AuthorName';
import ReadTime from '../molecule/ReadTime';
import More from '../atoms/More';
import customStyle from '../theme';

const CardMui = () => {
  const classes=customStyle();
  return (
    <Card className={classes.cardStyle}>
      
      <CardMedia
        component="img"
        height="292px"
        width="294.1px"
        image="https://www.linkpicture.com/q/image_106.png"
        alt="Book"
      />

        <BookTitle />
        <AuthorName />
        <ReadTime />
        <More />
        
        <Typography sx={{
          width : "284px",
          height : "15px",
          position: "relative",
         
          background: "#F1F6F4",
          border : "1px solid #E1ECFC",
          boxSizing: "border-box",
          borderRadius: "0px 0px 8px 8px",
      }} />
    </Card>);
}


export default CardMui;










