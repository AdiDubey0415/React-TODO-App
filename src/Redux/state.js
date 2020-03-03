import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

/*

1. Create the common state
2. Create a function which returns this state, and this function will accept changes, update the state and return it - REDUCER FUNCTION
3. Create a store based on the reducer function - Package - State, reducer function, dispatch

*/

let todos = [
  {
    name: "Todo1",
    user: "Amit",
    deadline: "03/05/2020"
  },
  {
    name: "Todo2",
    user: "Amit",
    deadline: "03/05/2020"
  },
  {
    name: "Todo3",
    user: "Amit",
    deadline: "03/05/2020"
  },
  {
    name: "Todo1",
    user: "Ayush",
    deadline: "03/05/2020"
  },
  {
    name: "Todo2",
    user: "Ayush",
    deadline: "03/05/2020"
  },
  {
    name: "Todo3",
    user: "Ayush",
    deadline: "03/05/2020"
  },
  {
    name: "Todo1",
    user: "John",
    deadline: "03/05/2020"
  },
  {
    name: "Todo2",
    user: "John",
    deadline: "03/05/2020"
  },
  {
    name: "Todo3",
    user: "John",
    deadline: "03/05/2020"
  },
]

let appState = {
  todo: { name: "", user: "Amit", deadline: "" },
  users: ["All", "Amit", "Maninder", "John", "William", "Ayush"],
  todos: todos,
  todosCopy: todos,
  selectedUser: ""
}

function appReducer(state = appState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  console.log("Actions here", action);
  switch(action.type) {
    case "SetUser":
      stateCopy.todo.user = action.payload;
      return stateCopy;
    
    case "SetTodoName":
      stateCopy.todo.name = action.payload;
      return stateCopy;

    case "SetUserTodos":
      let todosCopy = stateCopy.todosCopy.slice();
      if (action.payload == "All") {
        stateCopy.todos = todosCopy
      } else {
        todosCopy = todosCopy.filter(todo => todo.user == action.payload);
        stateCopy.todos = todosCopy;
      }
      return stateCopy;
  }
  return state;
}

const rootReducers = combineReducers({
  app: appReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
