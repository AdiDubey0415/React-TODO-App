import React from "react";

class NameEmail extends React.Component {
  render() {
    return (
      <div className="nameEmail">
        
        <input 
        type="text" 
        placeholder="User name" 
        onChange={(event) => this.props.getUserName(event.target.value)} />
        
        <input 
        type="text" 
        placeholder="User email"
        onChange={(event) => this.props.getUserEmail(event.target.value)} />

      </div>
    );
  }
}

export default NameEmail;
