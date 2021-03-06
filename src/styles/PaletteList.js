export default {
  "@global": {
    ".fade-exit": {
      opacity: "1",
      transform: "scale(1)"
    },
    ".fade-exit-active": {
      opacity: "0",
      transform: "scale(0)",
      transition: "all 400ms ease-out"
    }
  },
  root: {
    backgroundColor: "#f7f7f7",
//     backgroundColor: "#614385",
//     backgroundImage: "linear-gradient(160deg, #614385  0%, #516395 100%)",
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
    color: "#fff",
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
