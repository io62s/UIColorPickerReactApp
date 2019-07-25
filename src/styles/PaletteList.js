export default {
  root: {
    backgroundColor: "#f7f7f7",
    padding: "1rem",
    minHeight: "100vh"
  },
  container: {
    width: "50%",
    margin: "0 auto"
  },
  nav: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#a4a4a4",
    fontSize: "1rem"
  },
  paletteGrid: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "20px",
    marginTop: "3rem"
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: "40px",
    marginRight: "0.5rem"
  }
};
