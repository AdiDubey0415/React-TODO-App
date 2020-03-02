import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class UserDetails extends React.Component {
  componentDidMount = async () => {
    const API_KEY = "AIzaSyDsUro2mrHwyIEP5SneV8x2ZC5JgXsR5Dg";
    let url = `https://www.googleapis.com/youtube/v3/search?q=Sadhguru&type=video&maxResults=25&part=snippet&key=${API_KEY}`;
    let request = await axios.get(url);
    console.log("resss", request.data);
    this.props.dispatch({ type: "add_all_users", payload: request.data.items })
  }
  render() {
    console.log("Userdetails props", this.props);
    return (
      <div className="userDetails">
        User Details
        <ul>
          { this.props.videos && this.props.videos.map((user, index) => {
            return (
              <li key={index}>{user.name} --- {user.email} --- {user.city}</li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails,
    videos: state.videos
  };
}

export default connect(mapStateToProps)(UserDetails);






// const getDataFromRedux = (val) => {
//   console.log("getDataFromRedux here 123", val);
//   return { userDetails: val.userDetails };
// }

// const giveActionsToRedux = (dispatch) => {
//   console.log("giveActionsToRedux here", dispatch);
//   return { handleNameChange: dispatch, handleEmailChange: dispatch };
// }

// export default App;
// export default connect(getDataFromRedux, giveActionsToRedux)(UserDetails);
// export default UserDetails;