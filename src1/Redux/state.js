import { createStore } from 'redux';

// 1. Save all the channels at one place - Application State
let initialState = {
  name: "Rohit",
  email: "rohit@gmail.com",
  city: "Pune",
  userDetails: [],
  cities: [],
  videos: []
}

// 2. function - expose that function - to raise/trigger change requests - dispatch function - already present in redux
// dispatch(action)

// 3. function - make the necessary changes - reducer function
function appReducerFunction(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  console.log("Redux state here", state, action);
  switch (action.type) {
    case "user_name_change":
      stateCopy.name = action.payload;
      return stateCopy;

    case "user_email_change":
      stateCopy.email = action.payload;
      return stateCopy;

    case "user_city_change":
      stateCopy.city = action.payload;
      return stateCopy;

    case "add_user_data":
      // Create user data
      let user = {};
      user.name = stateCopy.name;
      user.email = stateCopy.email;
      user.city = stateCopy.city;
      // Push user inside userDetails array
      stateCopy.userDetails.push(user);
      // Check if user city is inside cities array, if not, push, if yes, don't do anything
      if (stateCopy.cities.indexOf(user.city) === -1) {
        stateCopy.cities.push(user.city);
      }
      console.log("State after adding user", stateCopy);
      return stateCopy;

    case "add_all_users":
      stateCopy.videos = [...stateCopy.videos, ...action.payload];
      return stateCopy;

    default:
      return stateCopy;
  }
}

// 4. Create a package - (state, dispatch) - store - there should be a way to create this store - already present in redux
const store = createStore(appReducerFunction);
export default store;

/*
1. What is to be done where?
2. What do we do in reducers? - Have to be pure functions
3. What do we do in actions?
4. Make api requests with actions
5. What do we do in react components before we dispatch an action?
6. Concept of multiple reducers, if needed and possible?
7. Finish the application
8. Demonstrate something simple with a simple example - how to remove local state and use redux in one component, how to remove passing of props and use redux using two simple components
*/