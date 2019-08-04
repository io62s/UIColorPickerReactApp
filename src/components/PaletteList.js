import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteList";
import logo from "../logo3.png";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  state = {
    openDeleteDialog: false,
    deletingId: ""
  };
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  openDialog = id => {
    this.setState(prevState => ({
      openDeleteDialog: !prevState.openDeleteDialog,
      deletingId: id
    }));
  };

  closeDialog = id => {
    this.setState({
      openDeleteDialog: false,
      deletingId: ""
    });
  };

  removePalette = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  };

  render() {
    const { classes, palettes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>
              <img src={logo} alt="logo" className={classes.logo} /> UI Color
              Picker
            </h1>
            <Link to="/palette/new">
              <Button
                variant="outlined"
                color="primary"
                style={{ fontWeight: "600", backgroundColor: "#fff" }}
              >
                Create Palette
              </Button>
            </Link>
          </nav>
          <TransitionGroup className={classes.paletteGrid}>
            {palettes.map(palette => {
              return (
                <CSSTransition key={palette.id} classNames="fade" timeout={400}>
                  <MiniPalette
                    key={palette.id}
                    {...palette}
                    id={palette.id}
                    openDialog={this.openDialog}
                    handleClick={() => this.goToPalette(palette.id)}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.openDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete this Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.removePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
