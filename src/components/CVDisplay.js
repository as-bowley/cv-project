import React from "react";
import "../styles/CVDisplay.css";

export default class CVDisplay extends React.Component {
  render() {
    return (
      <div className="display--container">
        <div className="display--personal">
          <h1>
            {this.props.formData.firstName} {this.props.formData.surname}
          </h1>
          <h3>{this.props.formData.jobTitle}</h3>
          <h4>Address</h4>
          <p>{this.props.formData.address1}</p>
          <p>{this.props.formData.address2}</p>
          <p>
            {this.props.formData.city} {this.props.formData.postcode}
          </p>
          <h4>Phone No.</h4>
          <p>{this.props.formData.phoneNo}</p>
          <h4>Email</h4>
          <p>{this.props.formData.email}</p>
        </div>

        <div>
          <p>{this.props.formData.description}</p>
        </div>
      </div>
    );
  }
}
