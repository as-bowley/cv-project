import React from "react";
import "../styles/Experience.css";

export default class Experience extends React.Component {
  render() {
    const mappedExperience = this.props.formData.experience.map(
      (experience) => {
        return (
          <button
            key={experience.id}
            onClick={this.props.onClick}
            value={experience.text}
            id={experience.id}
          >
            {experience.company} - {experience.from}
            <small>X</small>
          </button>
        );
      }
    );
    return (
      <div className="experienceForm--container">
        <h3 className="experienceForm--title long">Experience</h3>
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={this.props.formData.currentExperience.position}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={this.props.formData.currentExperience.company}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          className="long"
          value={this.props.formData.currentExperience.location}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="From"
          name="from"
          value={this.props.formData.currentExperience.from}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          placeholder="To"
          name="to"
          value={this.props.formData.currentExperience.to}
          onChange={this.props.handleChange}
        />
        <textarea
          placeholder="Job description"
          name="jobdescription"
          className="long"
          value={this.props.formData.currentExperience.jobdescription}
          onChange={this.props.handleChange}
        />
        <button
          type="submit"
          onClick={this.props.onSubmit}
          className="addButton"
        >
          Add
        </button>
        <div className="experienceEditList">{mappedExperience}</div>
      </div>
    );
  }
}
