export default {
  root: {
    backgroundColor: "#f7f7f7",
    padding: "1rem",
    minHeight: "100vh"
  },
  container: {
    width: "50%",
    margin: "0 auto",

    "@media (max-width: 550px)": {
      width: "80%"
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
      //fontWeight: "600",
      //color: "#fff",
      //padding: "10px 10px",
      marginTop: "1rem"
      // background: "#0ac6d3",
      // border: "1px solid #f0f0f0",
      // borderRadius: "3px",
      // textAlign: "center",
      // transition: "all 0.2s ease-out",

      // "&:hover": {
      //   color: "#0ac6d3",
      //   background: "#fff",
      //   boxShadow: "0 2px 8px rgba(0,0,0,.1)"
      // }
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
