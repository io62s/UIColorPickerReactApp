import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import logo from "../logo2.png";

export class Navbar extends Component {
  state = {
    format: "hex",
    open: false
  };

  handleFormatChange = e => {
    this.setState(
      {
        format: e.target.value,
        open: true
      },
      () => {
        this.props.handleChange(this.state.format);
      }
    );
  };

  handleCloseSnackbar = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      level,
      changeLevel,
      showingAllColors,
      showBackBtn,
      id
    } = this.props;
    const { format, open } = this.state;

    return (
      <header className="Navbar">
        <Fragment>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" /> UI Color Picker
            </Link>
          </div>
          {showBackBtn && (
            <Link className="back-btn" to={`/palette/${id}`}>
              Go Back
            </Link>
          )}
          {showingAllColors && (
            <div className="slider-container">
              <span>
                Level: <strong>{level}</strong>
              </span>
              <div className="slider">
                <Slider
                  defaultValue={level}
                  min={100}
                  max={900}
                  step={100}
                  onAfterChange={changeLevel}
                />
              </div>
            </div>
          )}
        </Fragment>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.handleCloseSnackbar}
          action={[
            <IconButton
              onClick={this.handleCloseSnackbar}
              color="inherit"
              key="close"
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
