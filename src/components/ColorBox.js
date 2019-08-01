import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "../styles/ColorBox.css";

class ColorBox extends Component {
  state = {
    copied: false
  };
  changeCopyState = () => {
    this.setState(
      {
        copied: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            copied: false
          });
        }, 1500);
      }
    );
  };

  render() {
    const { name, background, moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;

    return (
      <div style={{ background: background }} className="ColorBox">
        <div
          style={{ background: background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1 className={classes.copyText}>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className="box-content">
            <span className={`${classes.copyText}`}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className={`copy-button ${classes.copyText}`}>Copy</button>
          </CopyToClipboard>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${classes.copyText}`}>more</span>
          </Link>
        )}
      </div>
    );
  }
}

const styles = {
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.08 ? "black" : "white"
  }
};

export default withStyles(styles)(ColorBox);
