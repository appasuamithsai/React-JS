import React, { Component } from "react";
import Box from "@mui/material/Box";
import Buttons from "../../../atoms/explore-item/Buttons";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Divider, Grid } from "@mui/material";
import ExploreMenuHead from "../explore-grid-head/ExploreMenuHead";
const list = [
  { name: "Entrepreneurship", comp: <RocketLaunchOutlinedIcon /> },
  { name: "Science", comp: <ScienceOutlinedIcon /> },
  { name: "Economics", comp: <FiberSmartRecordOutlinedIcon /> },
  { name: "Corporate Culture", comp: <BusinessCenterOutlinedIcon /> },
  { name: "Psychology", comp: <PsychologyOutlinedIcon /> },
  { name: "Nature & Environment", comp: <YardOutlinedIcon /> },
  { name: "Politics", comp: <AccountBalanceOutlinedIcon /> },
  { name: "Health & Nutrition", comp: <LocalHospitalOutlinedIcon /> },
  { name: "History", comp: <PublicOutlinedIcon /> },
  { name: "Motivation & Inspiration", comp: <TipsAndUpdatesOutlinedIcon /> },
  { name: "Productivity", comp: <HourglassBottomOutlinedIcon /> },
  { name: "Career & Success", comp: <ModeStandbyOutlinedIcon /> },
  { name: "Marketing & Sales", comp: <AutoGraphOutlinedIcon /> },
  { name: "Personal Development", comp: <SignalCellularAltOutlinedIcon /> },
  { name: "Communication Skills", comp: <CommentOutlinedIcon /> },
  { name: "Money & Investments", comp: <AccountBalanceWalletOutlinedIcon /> },
  { name: "Sex & Relationship", comp: <FavoriteBorderOutlinedIcon /> },
  { name: "Education", comp: <SchoolOutlinedIcon /> },
];


interface Handle{
  handleChange:()=>void;

}

const ExploreMenu = (props:Handle) => {
  const component = list.map((e) => (
    <Buttons handleChange={props.handleChange} itemname={e.name} itemicon={e.comp}/>
  ));

  return (
    <Box
      zIndex="1"
      sx={{
        position: "absolute",
        height: "100%",
      }}
    >
      <Box
        sx={{
          paddingLeft: "254px",
          backgroundColor: "#F1F6F4",
          paddingBottom: "15px",
        }}
      >
        <ExploreMenuHead />
        <Divider sx={{ marginRight: "250px" }} />
        <Grid container rowSpacing="18px" sx={{ paddingTop: "10px" }}>
          {component.map((e) => (
            <Grid item xs={4}>
              {e}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ backgroundColor: "#111", height: "100%", width: "100%",opacity:'0.4' }}
      ></Box>
    </Box>
  );
};
export default ExploreMenu;
