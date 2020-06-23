import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { unfollow, follow } from './api-user';

class FollowProfileButton extends Component {
  followClick = () => {
    this.props.onButtonClick(follow);
  }

  unfollowClick = () => {
    this.props.onButtonClick(unfollow);
  }

  render() {
    return (
      <div>
        { this.props.following
          ? (<Button variant="raised" color="secondary" onClick={this.unfollowClick}>Unfollow</Button>)
          : (<Button variant="raised" color="primary" onClick={this.followClick}>Follow</Button>)}
      </div>
    );
  }
}

export default FollowProfileButton;
