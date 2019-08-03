export default {
  root: {
    position: "relative",
    cursor: "pointer",

    "&:hover svg": {
      color: "white",
      transform: "scale(1.4)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    left: "0",
    bottom: "0",
    color: "rgba(0,0,0, 0.6)",
    fonSize: "0.8rem",
    textTransform: "uppercase"
  },
  deleteIcon: {
    transition: "all 0.2s ease-out"
  }
};
