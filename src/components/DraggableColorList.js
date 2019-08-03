import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/DraggableColorList";

const DraggableColorList = SortableContainer(
  ({ colors, removeColor, classes }) => {
    return (
      <div className={classes.colors}>
        {colors.map(({ color, name }, i) => (
          <DraggableColorBox
            index={i}
            key={name}
            color={color}
            name={name}
            handleClick={removeColor}
          />
        ))}
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorList);
