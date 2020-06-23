import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import ViewIcon from '@material-ui/icons/Visibility';
import uuid from 'react-uuid';
import { findPeople, follow } from './api-user';
import auth from '../auth/auth-helper';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit,
    margin: 0,
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    fontSize: '1em',
  },
  avatar: {
    marginRight: theme.spacing.unit * 1,
  },
  follow: {
    right: theme.spacing.unit * 2,
  },
  snack: {
    color: theme.palette.protectedTitle,
  },
  viewButton: {
    verticalAlign: 'middle',
  },
});

class FindPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      open: false,
    };
  }

  componentDidMount = () => {
    const jwt = auth.isAuthenticated();
    findPeople({
      userId: jwt.user._id,
    }, {
      t: jwt.token,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }

  clickFollow = (user, index) => {
    const jwt = auth.isAuthenticated();
    follow({
      userId: jwt.user._id,
    }, {
      t: jwt.token,
    }, user._id).then((data) => {
      if (data.error) {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ error: data.error });
      } else {
        this.setState((prevState) => {
          const toFollow = prevState.users;
          toFollow.splice(index, 1);
          return { users: toFollow, open: true, followMessage: `Following ${user.name}!` };
        });
      }
    });
  }

  handleRequestClose = (event, reason) => {
    this.setState({ open: false });
  }

  // NOTE: possible error might arise from the way clickFollow is called in onClick
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography type="title" className={classes.title}>
            Who to follow
          </Typography>
          <List>
            {this.state.users.map((item, i) => {
              return (
                <span key={uuid()}>
                  <ListItem>
                    <ListItemAvatar className={classes.avatar}>
                      <Avatar src={`/api/users/photo/${item._id}`} />
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                    <ListItemSecondaryAction className={classes.follow}>
                      <Link to={`/user/${item._id}`}>
                        <IconButton variant="raised" color="secondary" className={classes.viewButton}>
                          <ViewIcon />
                        </IconButton>
                      </Link>
                      <Button aria-label="Follow" variant="raised" color="primary" onClick={this.clickFollow(item, i)}>
                        Follow
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                </span>
              );
            })}
          </List>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          onClose={this.handleRequestClose}
          autoHideDuration={6000}
          message={<span className={classes.snack}>{this.state.followMessage}</span>}
        />
      </div>
    );
  }
}

export default withStyles(styles)(FindPeople);
