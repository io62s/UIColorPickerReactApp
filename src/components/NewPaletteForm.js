import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import DraggableColorList from "./DraggableColorList";
import ColorPickerForm from "./ColorPickerForm";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import arrayMove from "array-move";

const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  heading: {
    textAlign: "center",
    margin: "1rem 0"
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  pickerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "1.5rem",
    justifyContent: "flex-start"
  },
  elContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px"
  },
  picker: {
    width: "100%",
    marginBottom: "1.5rem"
  },
  buttonMain: {
    margin: "2rem auto",
    width: "95%",
    padding: "10px 0",
    fontSize: "1.4rem"
  },
  button: {
    width: "48%"
  },
  input: {
    display: "none"
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

class NewPaletteForm extends Component {
  state = {
    open: true,
    colors: this.props.palettes[0].colors
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

  handleSubmit = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
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
    const rndmPlt = Math.floor(Math.random() * this.props.palettes.length);
    let rndmClr = Math.floor(
      Math.random() * this.props.palettes[rndmPlt].colors.length
    );
    let randomColor = this.props.palettes[rndmPlt].colors[rndmClr];
    let isDuplicateColor = true;

    while (isDuplicateColor) {
      rndmClr = Math.floor(
        Math.random() * this.props.palettes[rndmPlt].colors.length
      );
      randomColor = this.props.palettes[rndmPlt].colors[rndmClr];
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
          classes={classes}
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
            <div className={classes.elContainer}>
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
              classes={classes}
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
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
