import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  changeLevel = level => {
    this.setState({
      level
    });
  };

  changeFormat = val => {
    this.setState({
      format: val
    });
  };

  render() {
    const { level, format } = this.state;
    const { classes } = this.props;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
          showBackBtn={false}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

const styles = {
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
  }
};

export default withStyles(styles)(Palette);
