import React, {Component} from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "Neznámý voják",
    //   employeeId: 0,
    // }
  }

  render() {
    const { userData } = this.props

    return (
      <p>
        Jméno: {this.props.name} | Číslo zaměstnance: {this.props.employeeId}
      </p>
    )
  }
}

export default UserInfo;
