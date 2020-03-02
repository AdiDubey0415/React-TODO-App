import React, { Component } from "react";
import { connect } from "react-redux";

// 2. Input - Todo input, user dropdown, deadline input, submit button

class Input extends Component {
  handleUserSelection = (user) => {
    console.log("User here", user);
    this.props.dispatch({
      type: "SetUser",
      payload: user
    });
  }

  handleTodoInput = (val) => {
    this.props.dispatch({
      type: "SetTodoName",
      payload: val
    });
  }

  render() {
    console.log("input props", this.props);
    return (
      <div style={{"border": "2px solid black", "padding": "2rem", "display": "flex", "justifyContent": "space-between"}}>
        <input type="text" placeholder="Todo name" onChange={(e) => this.handleTodoInput(e.target.value)} />
        <select value={this.props.todo.user} onChange={(e) => this.handleUserSelection(e.target.value)}>
          {
            this.props.usersList && this.props.usersList.map(user => {
              return (
                <option key={user}>{user}</option>
              );
            })
          }
        </select>
        <input type="date" />
        <button>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("State", state);
  return {
    usersList: state.app.users,
    todo: state.app.todo,
  };
}

export default connect(mapStateToProps)(Input);
