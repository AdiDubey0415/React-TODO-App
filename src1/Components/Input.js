import React from "react";
import { connect } from "react-redux";

function Input(props) {
  console.log("Hereeee", props);
  return (
  <div>
    <input type="text" placeholder="Type your name here" value={props.name}
    onChange={(event) => props.dispatch({ type: "change_user_name", payload: event.target.value })} />
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
