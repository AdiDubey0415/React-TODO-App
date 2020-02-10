import { createStore } from 'redux';

// 1. Save all the channels at one place - Application State
let initialState = {
  name: "Rohit",
  email: "rohit@gmail.com",
  city: "Pune",
  userDetails: [],
  cities: []
}

// 2. function - expose that function - to raise/trigger change requests - dispatch function - already present in redux
// dispatch(action)

// 3. function - make the necessary changes - reducer function
function appReducerFunction(state = initialState, action) {
  console.log("Redux state here", action);
  let stateCopy = JSON.parse(JSON.stringify(state));
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

    default:
      return stateCopy;
  }
}

// 4. Create a package - (state, dispatch) - store - there should be a way to create this store - already present in redux
const store = createStore(appReducerFunction);
export default store;