import { makeStyles } from "@mui/styles";

var customStyle = makeStyles({
  addToLibBtn: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "20px",
    fontSize: "16px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#0365F2",
      color: "#FFFFFF",
    },
  },
  authorNameTypography: {
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 500,
    color: "#6D787E",
  },
  avatarLogin: {
    bgcolor: "#69A6E3",
  },
  bannerImage: {
    border: "none",
    boxShadow: "none",
    height: "230px",
    width: "250px",
    backgroundColor: "#F1F6F4",
  },
  bannerOne: {
    fontWeight: "700",
    fontSize: "36px",
    color: "#03314B",
  },
  readTimeTopography: {
    alignItems: "center",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6D787E",
  },

  cardStyle: {
    maxWidth: "284px",
    maxHeight: "490px",
    borderRadius: "8px",
  },
});

export default customStyle;
