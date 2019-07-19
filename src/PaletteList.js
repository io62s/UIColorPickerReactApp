import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import logo from "./logo.png";

class PaletteList extends Component {
  render() {
    const { classes } = this.props;
    const { palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>
              <img src={logo} alt="logo" className={classes.logo} /> UI Colors
            </h1>
          </nav>
          <div className={classes.paletteGrid}>
            {palettes.map(palette => {
              return (
                <Link
                  key={palette.paletteName}
                  className={classes.link}
                  to={`/palette/${palette.id}`}
                >
                  <MiniPalette {...palette} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
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
    color: "#0ac6d3",
    fontSize: "1.1rem"
  },
  paletteGrid: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "20px",
    marginTop: "3rem"
  },
  link: {
    textDecoration: "none"
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

export default withStyles(styles)(PaletteList);
