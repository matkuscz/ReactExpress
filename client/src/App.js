import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import UserInfo from './components/UserInfo'
import UnallocatedTimeBlock from './components/UnallocatedTimeBlock'
import Project from './components/Project'
import WorkingDay from './components/WorkingDay'
import Calendar from './components/Calendar'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {apiResponse: ""};
  }

  callApi() {
    fetch("http://localhost:9000/testApi")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callApi();
  }

  selectDay(e) {
    this.callApi();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Dochazka
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <p className="Dochazka">{this.state.apiResponse}</p>



        <UserInfo name={"Neznámý voják"} employeeId={0} ></UserInfo>

        <ul>
          <li>
            <UnallocatedTimeBlock date={"1.1.2000"} arrivalTime={"8:00"} leaveTime={"16:00"}></UnallocatedTimeBlock>
          </li>
          <li>
            <UnallocatedTimeBlock date={"2.1.2000"} arrivalTime={"9:00"} leaveTime={"14:00"}></UnallocatedTimeBlock>
          </li>
        </ul>

        <p>Projekty:</p>
        <ul>
          <li>
            <Project name={"XXX"} code={"IR-9999"} description={"XXX pro YYY"}></Project>
          </li>
          <li>
            <Project name={"P"} code={"PP-0000"} description={"bla bla ble"}></Project>
          </li>
        </ul>


        <WorkingDay></WorkingDay>
        <WorkingDay></WorkingDay>
        <WorkingDay></WorkingDay>

        <Calendar></Calendar>

      </div>

    );
  }
}

export default App;
