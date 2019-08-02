import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  colors: {
    width: "100%",
    height: "calc(100vh - 64px)",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",

    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto"
    }
  }
};

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
