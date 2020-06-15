//View of names of all users fetched with each link to user profile

import { list } from "./api-user"
import { render } from "react-dom"
import React, {Component} from 'react'
import { Typography, ListItemText, ListItemSecondaryAction, withStyles } from "material-ui"


const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 2
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing.unit * 2,
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing.unit * 2
    }
  })
class Users extends Component {
    state = { users: [] }



//user list method to fetch user and load the data into component
//by updating state
    componentDidMount = ()=> {
        list().then((data)=> {
            if (data.error)
                console.log(data.error)
            else
                this.setState({users: data})
        }) 
    }
    render() {
        const {classes} = this.props
        return (
            <Paper className = {classes.root} elevation = {4}>
                <Typography type= 'title' className = {classes.title}>
                    All Users
                </Typography>
                <List dense>
                    {this.state.users.map(function(item, i) {
                        return <Link to={'/user/' + item._id} key={i}>
                            <ListItem button='button'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Person/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary = {item.name}/>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <ArrowForward/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Link>
                    } )}
                </List>
            </Paper>
        )
    }
}
export default withStyles(styles) (Users);
