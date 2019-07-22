import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
class SingleColorPalette extends Component {
  state = {
    shades: [],
    format: "hex"
  };

  getShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    this.setState({
      shades: shades.slice(1)
    });
  };

  componentDidMount() {
    this.getShades(this.props.palette, this.props.colorId);
  }

  changeFormat = val => {
    this.setState({
      format: val
    });
  };

  render() {
    const { shades, format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          handleChange={this.changeFormat}
          showingAllColors={false}
          showBackBtn={true}
          id={id}
        />

        <div className="Palette-shades">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
