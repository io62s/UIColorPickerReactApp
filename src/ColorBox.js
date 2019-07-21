import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./ColorBox.css";

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
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.08;
    return (
      <div style={{ background: background }} className="ColorBox">
        <div
          style={{ background: background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1 className={`${isLightColor ? "dark-text" : null}`}>copied!</h1>
          <p className={`${isLightColor ? "dark-text" : null}`}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? "light-text" : null}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button
              className={`copy-button ${isLightColor ? "dark-text" : null}`}
            >
              Copy
            </button>
          </CopyToClipboard>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${isLightColor ? "dark-text" : null}`}>
              more
            </span>
          </Link>
        )}
      </div>
    );
  }
}

export default ColorBox;
