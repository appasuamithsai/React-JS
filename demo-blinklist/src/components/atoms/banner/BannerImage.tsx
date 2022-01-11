import { Card, CardMedia } from "@mui/material";
import React from "react";
import bannerimg from "../assets/bannerimg.png";
const BannerImage = () => {
  return (
    <Card
      sx={{
        border: "none",
        boxShadow: "none",
        height: "230px",
        width: "250px",
        backgroundColor:'#F1F6F4'
      }}
    >
      <CardMedia component="img" image={bannerimg} alt="main-image" />
    </Card>
  );
};

export default BannerImage;
