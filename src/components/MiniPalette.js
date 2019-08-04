import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/MiniPalette";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends Component {
  deletePalette = e => {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  };

  render() {
    const { classes, paletteName, emoji, handleClick } = this.props;
    const miniColorBoxes = this.props.colors.map(color => (
      <div
        className={classes.minicolor}
        style={{ backgroundColor: `${color.color}` }}
        key={color.name}
      />
    ));
    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "0.2s ease-out" }}
          onClick={this.deletePalette}
        />

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
