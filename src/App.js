import React, { Component } from "react";
import AddEntry from "./Components/AddEntry";
import "./App.css";

const toDoList = [
  {
    desc: "Get the keys",
    deadline: "20:00",
    completed: true
  },
  {
    desc: "Buy veg",
    deadline: "20:00",
    completed: false
  },
  {
    desc: "Go home",
    deadline: "20:00",
    completed: true
  }
];

const completedStyle = {
  backgroundColor: "green"
};
const notCompletedStyles = {
  backgroundColor: "red"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      entryValue: "",
      deadLineDate: "",
      toDo: toDoList,
      editState: false
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  index = -1;

  addEntry = (entryValue, deadlineValue) => {
    const newToDo = {
      desc: entryValue,
      deadline: deadlineValue,
      completed: false
    };
    const newArray = [...this.state.toDo, newToDo];
    this.setState({
      entryValue: "",
      deadLineDate: "",
      toDo: newArray
    });
    console.log(toDoList, '###', this.state, 'state');
  };

  deleteEntry(index) {
    this.state.toDo.splice(index, 1);
    this.setState({
      toDo: this.state.toDo
    });
  }

  ChangeAddValue = value => {
    this.setState({
      entryValue: value
    });
  };

  ChangeDeadLine = value => {
    this.setState({
      deadLineDate: value
    });
  };

  updateEntry = index => {
    this.index = index;
    const updateDesc = this.state.toDo[index].desc;
    const updateDeadline = this.state.toDo[index].deadline;
    this.setState({
      entryValue: updateDesc,
      deadLineDate: updateDeadline,
      editState: true
    });
  };

  editEntry = () => {
    // const editedValue = this.state.entryValue;
    // const editedDate = this.state.deadLineDate;
    // this.setState({
    //   toDo[this.index].desc : edited
    // })
    const editedDesc = (this.state.toDo[
      this.index
    ].desc = this.state.entryValue);
    const editedDate = (this.state.toDo[
      this.index
    ].deadline = this.state.deadLineDate);
    console.log(toDoList, "ddd");
    this.setState({
      toDo: toDoList,
      editState: false,
      entryValue: "",
      deadLineDate: "",
    });
    console.log(toDoList, '###', this.state, 'state');
  };

  showState = () => {
    console.log(this.state, 'STATEEEEEE');
  }

  render() {
    return (
      <div>
        <button onClick={this.showState}>Show State</button>
        <AddEntry
          entryValue={this.state.entryValue}
          deadLine={this.state.deadLineDate}
          changeAddValue={this.ChangeAddValue}
          ChangeDead={this.ChangeDeadLine}
          editEntry={this.editEntry}
          addEntry={this.addEntry}
          editState={this.state.editState}
        />
        {this.state.toDo.map((toDo, index) => {
          return (
            <div key={index}>
              <h1
                onClick={() => this.updateEntry(index)}
                style={toDo.completed ? completedStyle : notCompletedStyles}
              >
                {toDo.desc}
              </h1>
              <span>{toDo.deadline}</span>
              <button onClick={() => this.deleteEntry(index)}>
                Delete Entry
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
