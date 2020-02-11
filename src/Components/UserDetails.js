import React from "react";
import { connect } from "react-redux";

class UserDetails extends React.Component {
  render() {
    console.log("Userdetails props", this.props);
    return (
      <div className="userDetails">
        User Details
        <ul>
          { this.props.userDetails && this.props.userDetails.map((user, index) => {
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
    userDetails: state.userDetails
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