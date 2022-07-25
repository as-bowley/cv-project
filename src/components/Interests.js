import React from "react";
import "../styles/Interests.css";

export default class Interests extends React.Component {
  render() {
    return (
      <div className="interests--container">
        <h3 className="interests--title">Personal Interests</h3>
        <textarea
          placeholder="Enter any personal information you'd like to share with the empoyer. e.g. your hobbies or passions"
          name="interests"
          className="long"
          value={this.props.formData.interests}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
