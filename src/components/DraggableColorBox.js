import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../styles/DraggableColorBox";

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
