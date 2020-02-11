import React from "react";
import UserInput from "./Components/UserInput";
import UserDetails from "./Components/UserDetails";
import Cities from "./Components/Cities";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {

  addUserDataToList = (user) => {
    let users = this.state.userDetails.slice();
    let cities = this.state.cities.slice();
    if (cities.indexOf(user.city) === -1) {
      cities.push(user.city);
    }
    users.push(user);
    this.setState({
      userDetails: users,
      cities: cities
    });
  }

  handleInputChange = (value) => {
    this.setState({
      name: value
    });
  }

  render() {
    return (
      <div className="wrapper">
        <UserInput getUserData={(user) => this.addUserDataToList(user)} />
        <div className="lists">
          <UserDetails />
          <Cities />
        </div>
      </div>
    );
  }
}

export default App;

/*
Two aspects to the connect function, two jobs it has to do - give data from redux to the component and give actions from react to redux

Scenario - The entire application state now, instead of being divided and spread across multiple components, is not centralized at one place, in one object
Now this object is from where all the components will receive the data they need
How will they receive the data? At the end of the day, a component will receive data only through props
So, two jobs to be done here are -
1. Components have to receive data
2. Components have to send out actions
Components can do both only through - PROPS
So, the connect function has two jobs to be done -
1. Provide data from the centralized redux state to react components through props.
2. Take the actions from the react components to the redux reducers.
*/

// export default App;


{/* <input type="text" 
        placeholder="Type your name here"
        value={this.props.name}
        onChange={(event) => this.props.dispatch({ type: "change_user_name", payload: event.target.value })}
        /> */}










// 2. Through props - get whatever channels they need through props - connect function

// 2. They should be able to subscribe to my channel, connect with me
// Through props - get whatever channels they need through props - connect function

// 3. There should be for you to raise change requests
// Should be able to use the function the service provider gave you ( dispatch function ) to trigger changes, and then send in your "CHANGE REQUEST DETAILS" - actions