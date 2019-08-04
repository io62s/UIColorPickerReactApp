const drawerWidth = 350;
export default theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "2rem",
    "@media (max-width: 800px)": {
      margin: 0,
      paddingRight: "5px",
      "& MuiToolbar-gutters": {
        paddingRight: "0",
        paddngLeft: "0"
      }
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    "@media (max-width: 800px)": {
      marginRight: 0
    }
  },
  navBtns: {
    "& a": {
      textDecoration: "none",
      marginLeft: "1rem",
      "@media (max-width: 800px)": {
        marginLeft: "5px"
      }
    }
  }
});
