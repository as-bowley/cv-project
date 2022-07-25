import React from "react";
import "../styles/Education.css";

export default class Education extends React.Component {
  render() {
    const mappedEducation = this.props.formData.qualifications.map((quali) => {
      return (
        <button
          key={quali.id}
          onClick={this.props.onClick}
          value={quali.text}
          id={quali.id}
        >
          {quali.school} - {quali.from}
          <small>X</small>
        </button>
      );
    });
    return (
      <div className="educationForm--container">
        <h3 className="educationForm--title long">Education</h3>
        <input
          type="text"
          placeholder="School"
          name="school"
          value={this.props.formData.education.school}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={this.props.formData.education.location}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Qualification"
          name="quali"
          value={this.props.formData.education.quali}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={this.props.formData.education.subject}
          onChange={this.props.handleChange}
        />

        <input
          type="text"
          placeholder="From"
          name="from"
          value={this.props.formData.education.from}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="To"
          name="to"
          value={this.props.formData.education.to}
          onChange={this.props.handleChange}
        />
        <textarea
          placeholder="Job description"
          name="description"
          className="long"
          value={this.props.formData.education.description}
          onChange={this.props.handleChange}
        />
        <button
          type="submit"
          onClick={this.props.onSubmit}
          className="addButton"
        >
          Add
        </button>
        <div className="experienceEditList">{mappedEducation}</div>
      </div>
    );
  }
}
