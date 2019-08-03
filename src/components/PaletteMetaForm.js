import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends Component {
  state = {
    stage: "form",
    newPaletteName: ""
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  showEmojiPicker = () => {
    this.setState({
      stage: "emoji"
    });
  };

  saveNewPalette = emoji => {
    this.props.handleSubmit(this.state.newPaletteName, emoji);
  };

  render() {
    const { newPaletteName, stage } = this.state;
    const { toggleFormOpen } = this.props;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={toggleFormOpen}>
          <DialogTitle id="emoji-dialog-title" style={{ textAlign: "center" }}>
            Chose a Palette Emoji
          </DialogTitle>
          <Picker onSelect={this.saveNewPalette} />
          <Button onClick={toggleFormOpen} color="primary">
            Cancel
          </Button>
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={toggleFormOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Chose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette. Make sure it's unique!
              </DialogContentText>

              <TextValidator
                name="newPaletteName"
                label="Palette Name"
                value={newPaletteName}
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter palette name",
                  "Palette name already used"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleFormOpen} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
