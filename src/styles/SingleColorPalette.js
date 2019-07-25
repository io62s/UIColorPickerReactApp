export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  PaletteShades: {
    height: "90vh",
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",

    "@media (max-width: 1000px)": {
      gridTemplateColumns: "repeat(auto-fill, 100%)"
    }
  }
};
