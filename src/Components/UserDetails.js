import React from "react";

class UserDetails extends React.Component {
  render() {
    console.log("This props", this.props);
    return (
      <div className="userDetails">
        User Details
        <ul>
          { this.props.userDetails.map((user, index) => {
            return (
              <li key={index}>{user.name} --- {user.email} --- {user.city}</li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

export default UserDetails;
