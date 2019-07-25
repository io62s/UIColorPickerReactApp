import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteList";
import logo from "./logo.png";

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { classes } = this.props;
    const { palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>
              <img src={logo} alt="logo" className={classes.logo} /> UI Color
              Palettes
            </h1>
          </nav>
          <div className={classes.paletteGrid}>
            {palettes.map(palette => {
              return (
                <MiniPalette
                  key={palette.paletteName}
                  {...palette}
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
