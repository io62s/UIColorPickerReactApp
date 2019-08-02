import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    // width: "20%",
    // height: "25%",
    // margin: "0 auto",
    // display: "inline-block",
    position: "relative",
    cursor: "pointer",

    "&:hover svg": {
      color: "white",
      transform: "scale(1.4)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    left: "0",
    bottom: "0",
    color: "rgba(0,0,0, 0.6)",
    fonSize: "0.8rem",
    textTransform: "uppercase"
  },
  deleteIcon: {
    transition: "all 0.2s ease-out"
  }
};
const DraggableColorBox = SortableElement(props => {
  const { classes, handleClick, name, color } = props;
  const removeColor = () => {
    handleClick(name);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span>
          <DeleteIcon className={classes.deleteIcon} onClick={removeColor} />
        </span>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
