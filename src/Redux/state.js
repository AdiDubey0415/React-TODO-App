import { createStore, combineReducers } from "redux";

/*

1. Create the common state
2. Create a function which returns this state, and this function will accept changes, update the state and return it - REDUCER FUNCTION
3. Create a store based on the reducer function - Package - State, reducer function, dispatch

*/
let appState = {
  todo: { name: "", user: "Amit", deadline: "" },
  users: ["Amit", "Maninder", "John", "William", "Ayush"],
  todos: [], // all - 20, john - 4, ayush - 4, all - 20
  // todosCopy: [], // 20
  selectedUser: ""
}

function appReducer(state = appState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case "SetUser":
      stateCopy.todo.user = action.payload;
      return stateCopy;
    
    case "SetTodoName":
      stateCopy.todo.name = action.payload;
      return stateCopy;
  }
  return state;
}

const reduxState = combineReducers({
  app: appReducer
});

const store = createStore(reduxState);

export default store;
