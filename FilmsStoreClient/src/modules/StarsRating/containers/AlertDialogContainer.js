import React from "react";
import DialogAlert from "../view";

class AlertDialogContainer extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <DialogAlert
        open={this.state.open}
        handleClickOpen={this.handleClickOpen}
        handleClose={this.handleClose}
      />
    );
  }
}

export default AlertDialogContainer;
