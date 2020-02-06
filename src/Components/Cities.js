import React from "react";

class Cities extends React.Component {
  render() {
    return (
      <div className="cities">
        Cities
        <ul>
          { this.props.cities.map((city, index) => {
            return (
              <li key={index}>{city}</li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

export default Cities;
