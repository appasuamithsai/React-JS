import { Grid } from "@mui/material";
import React from "react";
import BlinkHighlight from "../../footer/footer-highlight/BlinkHighlight";
import FooterCopyRight from "../../../atoms/footer/copyright/FooterCopyRight";
import FooterNavListOne from "../footer-navlist/FooterNavListOne";
import FooterNavListThree from "../footer-navlist/FooterNavListThree";
import FooterNavListTwo from "../footer-navlist/FooterNavListTwo";

const FooterMain = () => {
  return (
    <Grid container direction="column" sx={{backgroundColor:"#F1F6F4",marginTop:'111px'}}>
      <Grid item>


        <Grid container columnSpacing='32px' sx={{marginTop:'38px'}} >
        <Grid item sx={{
        marginLeft: "244px"}}><BlinkHighlight /> </Grid>
        <Grid item> <FooterNavListOne /></Grid>
        <Grid item> <FooterNavListTwo /></Grid>
        <Grid item> <FooterNavListThree /></Grid>
        </Grid>


      </Grid>

      <Grid item sx={{marginLeft:'244px',marginTop:'48px',marginBottom:'38px'}}><FooterCopyRight /></Grid>
    </Grid>
  );
};

export default FooterMain;
