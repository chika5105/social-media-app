import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import auth from '../auth/auth-helper';
import { remove } from './api-user';

class DeleteUser extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      open: false,
    };
  }

  clickButton = () => {
    this.setState({ open: true });
  }

  deleteAccount = () => {
    const jwt = auth.isAuthenticated();
    remove({
      userId: this.props.userId,
    }, { t: jwt.token }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        auth.signout(() => console.log('deleted'));
        this.setState({ redirect: true });
      }
    });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <span>
        <IconButton aria-label="Delete" onClick={this.clickButton} color="secondary">
          <DeleteIcon />
        </IconButton>

        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirm to delete your account.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteAccount} color="secondary" autoFocus="autoFocus">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default DeleteUser;
