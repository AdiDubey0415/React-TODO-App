import React, { Component } from "react";
import Input from "./Components/input";
import List from "./Components/list";

class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    )
  }
}

export default App;

/*
Components -
1. App - Wrapper
2. Input - Todo input, user dropdown, deadline input, submit button
3. List of todos - List, user dropdown for filtering

Data -
1. Todo input data
2. User list
3. Deadline data
4. Todos list
5. Selected user - as a filter

Component level data -
Input -
1. Todo input data
2. Deadline data

Application data -
1. User list
2. Todos list
3. Selected user - as a filter
*/