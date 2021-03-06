import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/PaletteFormNav";

class PaletteFormNav extends Component {
  state = {
    newPaletteName: "",
    formShowing: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  toggleFormOpen = () => {
    this.setState(prevState => ({
      formShowing: !prevState.formShowing
    }));
  };

  render() {
    const {
      classes,
      open,
      handleSubmit,
      handleToggleDrawer,
      palettes
    } = this.props;

    const { formShowing } = this.state;
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
              onClick={handleToggleDrawer}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.toggleFormOpen}
            >
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="outlined" color="secondary">
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            handleSubmit={handleSubmit}
            toggleFormOpen={this.toggleFormOpen}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
