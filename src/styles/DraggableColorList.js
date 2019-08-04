export default {
  colors: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 64px)",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",

    "@media (max-width: 1100px)": {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto"
    },

    "@media (max-width: 600px)": {
      height: "calc(100vh - 56px)",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto"
    }
  }
};
