import React from "react";
import { connect } from "react-redux";

class NameEmail extends React.Component {
  handleNameChange = (value) => {
    let action = {
      type: "user_name_change",
      payload: value
    };
    this.props.handleNameChange(action); // handleNameChange ==> dispatch(action)
    /*
    action => object
    {
      type: "user_name_change"
    }
    */
  }
  
  handleEmailChange = (value) => {
    this.props.handleEmailChange({ type: "user_email_change", payload: value });
  }

  render() {
    return (
      <div className="nameEmail">
        NameEmail
        <input 
        type="text" 
        placeholder="User name" 
        value={this.props.userName}
        onChange={(event) => this.handleNameChange(event.target.value)}
        />
        
        <input 
        type="text" 
        placeholder="User email"
        value={this.props.userEmail}
        onChange={(event) => this.handleEmailChange(event.target.value)}
        />

      </div>
    );
  }
}

/*
Job of connect function -
1. To give things from the redux state to the react component
2. Take change requests from react component to the redux state
*/

const giveDataFromReduxToReactComponent = (state) => {
  // Take the state from redux, expose it to the react component, through props
  // console.log("giveDataFromReduxToReactComponent", state);
  return {
    userName: state.name,
    userEmail: state.email
  };
}

const giveReduxChangeRequestsFromReactComponent = (dispatch) => {
  // To take the dispatch function from redux, expose it as props to the react component
  // console.log("giveReduxChangeRequestsFromReactComponent", dispatch);
  return {
    handleNameChange: dispatch,
    handleEmailChange: dispatch
  };
}

export default connect(giveDataFromReduxToReactComponent, giveReduxChangeRequestsFromReactComponent)(NameEmail);





// const getDataFromRedux = (val) => {
//   console.log("getDataFromRedux here", val);
//   return { name: val.name, email: val.email };
// }

// const giveActionsToRedux = (dispatch) => {
//   console.log("giveActionsToRedux here", dispatch);
//   return { handleNameChange: dispatch, handleEmailChange: dispatch };
// }

// export default NameEmail;
// export default connect(getDataFromRedux, giveActionsToRedux)(NameEmail);
