import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/images/logo.png';
import auth from '../auth/auth-helper';
import FindPeople from '../user/FindPeople';
import Newsfeed from '../post/Newsfeed';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5,
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary,
  },
  media: {
    minHeight: 330,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPage: true,
    };
  }

  init = () => {
    if (auth.isAuthenticated()) {
      this.setState({ defaultPage: false });
    } else {
      this.setState({ defaultPage: true });
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps = () => {
    this.init();
  }

  componentDidMount = () => {
    this.init();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.defaultPage
          && (
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <Typography type="headline" component="h2" className={classes.title}>
                  Home Page
                </Typography>
                <CardMedia className={classes.media} image={logo} title="logo" />
                <CardContent>
                  <Typography type="body1" component="p">
                    Welcome to the Social Media App Home page.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          )}
        {!this.state.defaultPage
          && (
          <Grid container spacing={24}>
            <Grid item xs={8} sm={7}>
              <Newsfeed />
            </Grid>
            <Grid item xs={6} sm={5}>
              <FindPeople />
            </Grid>
          </Grid>
          )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
