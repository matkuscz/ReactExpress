import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './../App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Calendar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
  }

  render() {
    const { classes } = this.props;

    var date = new Date();
    console.log(date);

    // Predvyplnit kalendar vybranym mesicem

    var that = this;

    var days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',];

    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          {
            days.map(function(name, index) {
              return(
                <Grid item xs={2} key={index} onClick={() => {that.handleClick(index)}} id={index}>
                  <Paper className={classes.paper}>{index + '.2.2020' + ' | ' + name}</Paper>
                </Grid>
              );
            })
          }
        </Grid>

        <Grid container spacing={1}>
          
        </Grid>
      </div>
      );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
