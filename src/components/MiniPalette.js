import React from "react";
import { withStyles } from "@material-ui/styles";

const MiniPalette = props => {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.minicolor}
      style={{ backgroundColor: `${color.color}` }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

const styles = {
  root: {
    backgroundColor: "#fff",
    borderRadius: "3px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease-out",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    borderRadius: "3px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.2rem"
  },
  minicolor: {
    width: "100%",
    height: "50px"
  }
};

export default withStyles(styles)(MiniPalette);
