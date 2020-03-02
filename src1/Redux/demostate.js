import { createStore } from "redux";

// 1. create that common data state
let appState = {
  name: "Virat Kohli"
}

// 2. Create a function which will return this state, initially the initial state, then the state after update
function appReducer(state = appState, action) {
  console.log("Actions", action);
  let stateCopy = {...state};
  switch (action.type) {
    case "change_user_name":
    stateCopy.name = action.payload;
    return stateCopy;
  }
  return state;
}

// 3. Create a package using this state, and a few other things
let store = createStore(appReducer);
export default store;