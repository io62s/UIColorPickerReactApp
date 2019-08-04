import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteList";
import logo from "../logo3.png";
import Button from "@material-ui/core/Button";

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { classes, palettes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>
              <img src={logo} alt="logo" className={classes.logo} /> UI Color
              Picker
            </h1>
            <Link to="/palette/new">
              <Button
                variant="outlined"
                color="primary"
                style={{ fontWeight: "600", backgroundColor: "#fff" }}
              >
                Create Palette
              </Button>
            </Link>
          </nav>
          <div className={classes.paletteGrid}>
            {palettes.map(palette => {
              return (
                <MiniPalette
                  key={palette.id}
                  {...palette}
                  id={palette.id}
                  deletePalette={deletePalette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
