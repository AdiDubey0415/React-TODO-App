import React from "react";

class City extends React.Component {
  render() {
    return (
      <div className="city">
        <input 
        type="text" 
        placeholder="User city" 
        onChange={(event) => this.props.getUserCity(event.target.value)}
        />
      </div>
    );
  }
}

export default City;
