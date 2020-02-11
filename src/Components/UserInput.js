import React from "react";
import NameEmail from "./NameEmail";
import City from "./City";
import { connect } from "react-redux";

class UserInput extends React.Component {
  render() {
    console.log("UserINout props", this.props);
    return (
      <div className="userInput">
        UserInput
        <NameEmail />
        <City />
        <button onClick={() => this.props.dispatch({ type: "add_user_data" })}>Submit</button>
      </div>
    );
  }
}

// const getDataFromRedux = (val) => {
//   console.log("getDataFromRedux here", val);
//   return { name: val.name, email: val.email };
// }

// const giveActionsToRedux = (dispatch) => {
//   console.log("giveActionsToRedux here", dispatch);
//   return { addUserData: dispatch };
// }

export default connect()(UserInput);
// export default UserInput;