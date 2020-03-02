import React from "react";
import { connect } from "react-redux";

class Cities extends React.Component {
  render() {
    return (
      <div className="cities">
        Cities
        <ul>
          { this.props.cities && this.props.cities.map((city, index) => {
            return (
              <li key={index}>{city}</li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(Cities);
