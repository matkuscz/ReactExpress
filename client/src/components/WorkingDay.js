import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class WorkingDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "1.1.2000",
      dayName: "Pondeli",
      isWorkingDay: true,
      filled: false,
      clicked: false,
    };

    // Potreba prebindovat this, aby fce fungovala
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({
      clicked: !this.state.clicked
    }));
    console.log(e.target.id);
  }

  render() {
    const { userData } = this.props

    return(
      <Button color="primary" onClick={this.handleClick}>
        {this.state.date} | {this.state.dayName} | {this.state.isWorkingDay.toString()} | {this.state.filled.toString()} | {this.state.clicked.toString()}
      </Button>
    )
  }
}

export default WorkingDay;
