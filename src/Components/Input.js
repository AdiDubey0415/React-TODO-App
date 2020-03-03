import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setTodoName, fetchTodo } from "../Actions/actions";

// 2. Input - Todo input, user dropdown, deadline input, submit button

class Input extends Component {
  handleUserSelection = (user) => {
    this.props.dispatch({
      type: "SetUser",
      payload: user
    });
  }

  handleTodoInput = (val) => {
    this.props.dispatch(setTodoName(val));
  }

  fetchTodos = () => {
    this.props.dispatch(fetchTodo());
  }

  render() {
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
        <input type="date" onChange={(e) => this.handleDate(e.target.value)} />
        <button>Submit</button>
        <button onClick={() => this.fetchTodos()}>Fetch Todos</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.app.users,
    todo: state.app.todo,
  };
}

export default connect(mapStateToProps)(Input);


/*

1. Actions which can be directly dispatched - do not make an api call, don't have to wait
2. You have to make an api call, wait for some data to come, and then dispatch your action with that data

*/