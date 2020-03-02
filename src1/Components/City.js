import React from "react";
import { connect } from "react-redux";

class City extends React.Component {
  render() {
    console.log("City props", this.props);
    return (
      <div className="city">
        City
        <input 
        type="text" 
        placeholder="User city" 
        value={this.props.userCity}
        onChange={(event) => this.props.handleCityChange({ type: "user_city_change", payload: event.target.value })}
        />
      </div>
    );
  }
}

const giveDataFromReduxToReact = (state) => {
  console.log("City Component redux state", state);
  return {
    userCity: state.city
  };
}

const takeActionsFromReactComponentToRedux = (dispatch) => {
  console.log("City Component dispatch function", dispatch);
  return {
    handleCityChange: dispatch
  };
}

export default connect(giveDataFromReduxToReact, takeActionsFromReactComponentToRedux)(City);

/*
1. The store is exposed to us - DONE
2. We need to connect to the store - connect function
3. Connect function's job
  1. To get state from redux, expose it to the component, through PROPS
  2. To get dispatch function from redux, expose it to the component, through PROPS

4. export connect function after wrapping this component
*/