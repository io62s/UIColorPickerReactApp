import React from "react";
import { withStyles } from "@material-ui/styles";

const PaletteFooter = props => {
  const { classes, paletteName, emoji } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

const styles = {
  PaletteFooter: {
    background: "white",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    height: "4vh"
  },
  emoji: {
    fontSize: "1.3rem",
    margin: "0 1rem",
    marginBottom: "5px",
    alignSelf: "center"
  }
};

export default withStyles(styles)(PaletteFooter);
