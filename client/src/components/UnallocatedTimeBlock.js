import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class UnallocatedTimeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolled: false,
    };

    // Potreba prebindovat this, aby fce fungovala
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({
      rolled: !this.state.rolled
    }));
  }

  render() {
    const { userData } = this.props

    if(this.state.rolled === true) {
      return(
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          XOXOXO
        </Button>
      )
    } else {
      return (
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Datum: {this.props.date} | Začátek: {this.props.arrivalTime} | Konec: {this.props.leaveTime}
        </Button>
      )
    }
  }
}

export default UnallocatedTimeBlock;
