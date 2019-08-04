import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import DraggableColorList from "./DraggableColorList";
import ColorPickerForm from "./ColorPickerForm";
import seedPallets from "../seedColors";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import arrayMove from "array-move";
import styles from "../styles/NewPaletteForm";

class NewPaletteForm extends Component {
  state = {
    open: true,
    colors: seedPallets[0].colors
  };

  handleToggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  addNewColor = newColor => {
    this.setState({
      colors: [...this.state.colors, newColor],
      newName: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (newPaletteName, emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: emoji.native,
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  removeColor = name => {
    const colors = this.state.colors.filter(color => color.name !== name);
    this.setState({
      colors
    });
  };

  clearPalette = () => {
    this.setState({
      colors: []
    });
  };

  addRandomColor = () => {
    const rndmPlt = Math.floor(Math.random() * seedPallets.length);
    let rndmClr = Math.floor(
      Math.random() * seedPallets[rndmPlt].colors.length
    );
    let randomColor = seedPallets[rndmPlt].colors[rndmClr];
    let isDuplicateColor = true;

    while (isDuplicateColor) {
      rndmClr = Math.floor(Math.random() * seedPallets[rndmPlt].colors.length);
      randomColor = seedPallets[rndmPlt].colors[rndmClr];
      isDuplicateColor = this.state.colors.some(
        color => color.name === randomColor.name
      );
    }

    this.setState({
      colors: [...this.state.colors, randomColor]
    });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  render() {
    const { classes, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length === 20;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleToggleDrawer={this.handleToggleDrawer}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleToggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography className={classes.heading} variant="h4">
              Create Palette
            </Typography>
            <div className={classes.btnContainer}>
              <Button
                disabled={paletteFull}
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={this.addRandomColor}
              >
                Random Color
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
            </div>
            <ColorPickerForm
              paletteFull={paletteFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={10}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
