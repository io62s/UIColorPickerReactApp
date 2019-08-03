import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/ColorPickerForm";

class ColorPickerForm extends Component {
  state = {
    newName: "",
    currentColor: "#0ac6d3"
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName
    };

    this.props.addNewColor(newColor);
    this.setState({
      newName: ""
    });
  };

  render() {
    const { classes, paletteFull } = this.props;
    const { currentColor, newName } = this.state;
    return (
      <div className={classes.pickerContainer}>
        <ChromePicker
          className={classes.picker}
          color={currentColor}
          onChangeComplete={newColor => this.updateCurrentColor(newColor)}
        />
        <ValidatorForm className={classes.form} onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.nameInput}
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
            disabled={paletteFull}
            variant="contained"
            color="primary"
            style={{
              backgroundColor: paletteFull ? "#dedede" : currentColor
            }}
            type="submit"
            className={classes.buttonMain}
          >
            {paletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
