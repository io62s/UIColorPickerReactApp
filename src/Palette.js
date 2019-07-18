import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./Palette.css";

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
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;