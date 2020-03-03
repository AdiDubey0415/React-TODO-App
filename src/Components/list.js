import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class List extends Component {
  setTodos = (user) => {
    this.props.dispatch({
      type: "SetUserTodos",
      payload: user
    });
  }
  render() {
    return (
      <div style={{"border": "2px solid black", "padding": "2rem", "display": "flex", "flexDirection": "column"}}>
        <select onChange={(e) => this.setTodos(e.target.value)}>
          {
            this.props.users && this.props.users.map(user => {
              return (
                <option key={user}>{user}</option>
              );
            })
          }
        </select>
        <ul>
          { this.props.todos.map((todo, index) =>{
            return (
              <li key={index}>{todo.name} -- {todo.user} -- {todo.deadline}</li>
            );
          }) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.app.todos,
    todosCopy: state.app.todosCopy,
    users: state.app.users
  }
}

export default connect(mapStateToProps)(List);
