import axios from "axios";

// export const fetchTodos = () => {
//   let request = axios.get("https://jsonplaceholder.typicode.com/todos");
//   console.log("Req", request);
//   return (dispatch) => {
//     request.then(res => {
//       console.log("Req 1", res);
//       return dispatch({
//         type: "FetchTodos",
//         payload: res.data
//       });
//     })
//   }
// }

// export const sayHi = () => {
//   console.log("Sasa");
//   return {
//     type: "Sayhi"
//   }
// }

// export const setName = (val) => {
//   return {
//     type: "SetTodoName",
//     payload: val
//   }
// }

// /*

// 1. Action can only be given to dispatch function
// 2. Action creator file doesn't have dispatch function
// 3. Whatever is being returned from here has to be given to dispatch function

// dispatch({
//   type: "Sayhi"
// })
// Next
// Reducers

// */

export const setTodoName = (val) => {
  return {
    type: "SetTodoName",
    payload: val
  }
}

export const fetchTodo = () => {
  return (abc) => {
    let request = axios.get("https://jsonplaceholder.typicode.com/todos");
    request.then(response => {
      console.log("Res", response);
      return abc({
        type: "FetchTodos",
        payload: response.data
      })
    })
  }
}

// export const fetchTodo = () => {
//   return async (abc) => {
//     let request = await axios.get("https://jsonplaceholder.typicode.com/todos");
//     console.log("Req", request);
//     return abc({
//       type: "FetchTodos",
//       payload: request.data
//     })
//   }
// }

