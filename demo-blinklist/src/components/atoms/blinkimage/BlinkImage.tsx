import { Card, CardMedia } from "@mui/material";
import React from "react";
import appname from "../assets/appname.png";
import { Link,MemoryRouter as Router } from "react-router-dom";

const BlinkImage = () => {
  return (
    //  <Router>
      <Link to="/">
        <Card sx={{ border: "none", boxShadow: "none" }}>
          <CardMedia
            component="img"
            height="26px"
            width="124px"
            image={appname}
            alt="appname"
          />
        </Card>
      </Link>
    // </Router>
  );
};

export default BlinkImage;
