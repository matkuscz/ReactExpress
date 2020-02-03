import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class FillingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // Potreba prebindovat this, aby fce fungovala
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
  }

  render() {
    const { userData } = this.props

    return(
      <Button color="primary" onClick={this.handleClick}>
        aaa
      </Button>
    )
  }
}

export default FillingForm;
