import React from "react";
import UserInput from "./Components/UserInput";
import UserDetails from "./Components/UserDetails";
import Cities from "./Components/Cities";
import "./App.css";

class App extends React.Component {
  state = { 
    userDetails: [],
    cities: []
  }

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

  render() {
    return (
      <div className="wrapper">
        <UserInput getUserData={(user) => this.addUserDataToList(user)} />
        <div className="lists">
          <UserDetails userDetails={this.state.userDetails} />
          <Cities cities={this.state.cities} />
        </div>
      </div>
    );
  }
}

export default App;
