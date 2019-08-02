import React, { Component } from "react";
import DraggableColorBox from "./DraggableColorBox";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

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
  elContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px"
  },
  picker: {
    flex: "1",
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
  colors: {
    width: "100%",
    height: "calc(100vh - 64px)"
    // display: "grid",
    // gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",

    // "@media (max-width: 600px)": {
    //   gridTemplateColumns: "1fr"
    // }
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
    currentColor: "#0ac6d3",
    newName: "",
    colors: [],
    newPaletteName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );

    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleToggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName
    };
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

  handleSubmit = () => {
    let newName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    const { open, currentColor, colors, newName, newPaletteName } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleToggleDrawer}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator
                name="newPaletteName"
                label="Palette Name"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter palette name",
                  "Palette name already used"
                ]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Random Color
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                Clear Palette
              </Button>
            </div>
            <div className={classes.elContainer}>
              <ChromePicker
                className={classes.picker}
                color={currentColor}
                onChangeComplete={newColor => this.updateCurrentColor(newColor)}
              />
            </div>
            <ValidatorForm className={classes.form} onSubmit={this.addNewColor}>
              <TextValidator
                name="newName"
                value={newName}
                placeholder="Enter Color Name"
                onChange={this.handleChange}
                validators={["required", "isColorNameUnique", "isColorUnique"]}
                errorMessages={[
                  "Enter color name",
                  "Color name must be unique",
                  "Color already used"
                ]}
              />
              <Button
                disabled={colors.length === 20}
                variant="contained"
                color="primary"
                style={{ backgroundColor: currentColor }}
                type="submit"
                className={classes.buttonMain}
              >
                {colors.length === 20 ? "Palette Full" : "Add Color"}
              </Button>
            </ValidatorForm>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <div className={classes.colors}>
            {colors.map(({ color, name }) => (
              <DraggableColorBox key={name} color={color} name={name} />
            ))}
          </div>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
