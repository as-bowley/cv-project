import React from "react";
import "../styles/Personal.css";

export default class Personal extends React.Component {
  render() {
    return (
      <div className="personalInformation">
        <h3 className="personalTitle long">Personal Information</h3>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={this.props.formData.firstName}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          value={this.props.formData.surname}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          name="jobTitle"
          className="long"
          value={this.props.formData.jobTitle}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Address Line 1"
          name="address1"
          value={this.props.formData.address1}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Address Line 2"
          name="address2"
          value={this.props.formData.address2}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={this.props.formData.city}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Postcode"
          name="postcode"
          value={this.props.formData.postcode}
          onChange={this.props.handleChange}
        />
        <input
          type="number"
          placeholder="Phone No."
          name="phoneNum"
          className="long"
          value={this.props.formData.phoneNo}
          onChange={this.props.handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="long"
          value={this.props.formData.email}
          onChange={this.props.handleChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          className="long"
          value={this.props.formData.description}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
