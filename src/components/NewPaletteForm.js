import React, { Component } from "react";
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
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";

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
    padding: "15px",
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
    alignContent: "center",
    justifyContent: "flex-start"
  },
  elContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "12px"
  },
  picker: {
    flex: "1"
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
  }
});

class NewPaletteForm extends Component {
  state = {
    open: false,
    currentColor: "teal",
    colors: ["purple", "#77E01E"]
  };

  handleToggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  addNewColor = () => {
    this.setState({
      colors: [...this.state.colors, this.state.currentColor]
    });
  };

  render() {
    const { classes } = this.props;
    const { open, currentColor } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
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
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: currentColor }}
              onClick={this.addNewColor}
              className={classes.buttonMain}
            >
              Add Color
            </Button>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <ul>
            {this.state.colors.map(color => {
              return <li style={{ backgroundColor: color }}>{color}</li>;
            })}
          </ul>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
