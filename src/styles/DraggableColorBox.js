import chroma from "chroma-js";
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
    color: props =>
      chroma(props.color).luminance() >= 0.08
        ? "rgba(0,0,0, 0.7)"
        : "rgba(255,255,255,0.9)",
    padding: "10px",
    left: "0",
    bottom: "0",
    fonSize: "0.8rem",
    textTransform: "uppercase"
  },
  deleteIcon: {
    transition: "all 0.2s ease-out"
  }
};
