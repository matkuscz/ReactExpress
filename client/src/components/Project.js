import React, {Component} from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData } = this.props

    return (
      <p>
        Jméno: {this.props.name} | Kód: {this.props.code} | Popis: {this.props.description}
      </p>
    )
  }
}

export default Project;
