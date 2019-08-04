export default {
  root: {
    backgroundColor: "#f5f5f5",
    padding: "1rem",
    minHeight: "100vh"
  },
  container: {
    width: "50%",
    margin: "0 auto",

    "@media (max-width: 600px)": {
      width: "70%"
    }
  },
  nav: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#a4a4a4",
    fontSize: "1rem",

    "& a": {
      textDecoration: "none",
      marginTop: "1rem"
    },

    "@media (max-width: 800px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  paletteGrid: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "20px",
    margin: "3rem 0"
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    height: "40px",
    marginRight: "0.5rem"
  }
};
