//Homepage

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import black_logo from './../assets/images/black_logo.png' //retrieved from https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsiWeyyTxN0T5z1_AiySIFoLkXPZOnbrWizQM6lKvlnVrV99tY&usqp=CAU


const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 590
  }
})

class Home extends Component {
  render() {
    const {classes} = this.props
    return (
        <Card className={classes.card}>
          <Typography type="headline" component="h2" className={classes.title}>
            Home Page
          </Typography>
          <CardMedia className={classes.media} image={black_logo} title="Black doc logo"/>
          <CardContent>
            <Typography type="body1" component="p">
              Welcome to the Social Media Skeleton home page.
            </Typography>
          </CardContent>
        </Card>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
