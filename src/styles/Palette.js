export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  PaletteColors: {
    height: "90vh",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))"
    
    "@media (max-width: 450px)": {
      minHeight: "100vh",
    },
  }
};
