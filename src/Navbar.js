import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import logo from "./logo.png";

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
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;

    return (
      <header className="Navbar">
        <>
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" /> UI Color Picker
            </a>
          </div>
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
        </>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1)</MenuItem>
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