import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import auth from '../auth/auth-helper';
import PostList from './PostList';
import { listNewsFeed } from './api-post';
import NewPost from './NewPost';

const styles = (theme) => ({
  card: {
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: theme.spacing.unit * 3,
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    fontSize: '1em',
  },
  media: {
    minHeight: 330,
  },
});
class Newsfeed extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  loadPosts = () => {
    const jwt = auth.isAuthenticated();
    listNewsFeed({
      userId: jwt.user._id,
    }, {
      t: jwt.token,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  }

  componentDidMount = () => {
    this.loadPosts();
  }

  addPost = (post) => {
    this.setState((prevState) => {
      const updatedPosts = prevState;
      updatedPosts.unshift(post);
      return { posts: updatedPosts };
    });
  }

  removePost = (post) => {
    this.setState((prevState) => {
      const updatedPosts = prevState;
      const index = updatedPosts.indexOf(post);
      updatedPosts.splice(index, 1);
      return { posts: updatedPosts };
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Typography type="title" className={classes.title}>
          Newsfeed
        </Typography>
        <Divider />
        <NewPost addUpdate={this.addPost} />
        <Divider />
        <PostList removeUpdate={this.removePost} posts={this.state.posts} />
      </Card>
    );
  }
}

export default withStyles(styles)(Newsfeed);
