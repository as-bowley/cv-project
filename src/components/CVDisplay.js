import React from "react";
import "../styles/CVDisplay.css";

export default class CVDisplay extends React.Component {
  render() {
    const mappedSkills = this.props.formData.skills.map((skill) => (
      <li key={skill.id}>{skill.text}</li>
    ));
    const mappedExperience = this.props.formData.experience.map(
      (experience) => (
        <div
          className="display--right--experience"
          key={experience.id}
          id={experience.id}
        >
          <div className="experience--dates">
            {experience.from} - {experience.to}
          </div>
          <div className="experience--titlecompany">
            <h4>{experience.position}</h4>
            <p>
              {experience.company}, {experience.location}
            </p>
          </div>
          <div className="experience--description">
            {experience.jobdescription}
          </div>
        </div>
      )
    );

    const mappedEducation = this.props.formData.qualifications.map(
      (qualification) => (
        <div
          className="display--right--education"
          key={qualification.id}
          id={qualification.id}
        >
          <div className="education--dates">
            {qualification.from} - {qualification.to}
          </div>
          <div className="education--school">
            <h4>
              {qualification.quali} {qualification.subject}
            </h4>
            <p>
              {qualification.school}, {qualification.location}
            </p>
          </div>
          <div className="education--description">
            {qualification.description}
          </div>
        </div>
      )
    );
    return (
      <div className="display--container">
        <div className="display--left">
          <h1>
            {this.props.formData.firstName} {this.props.formData.surname}
          </h1>
          <h4 className="jobTitle">{this.props.formData.jobTitle}</h4>
          <div className="display--left--divider">
            <h3>Personal Info</h3>
          </div>
          <div className="display--left--infoSection">
            <h5>Address</h5>
            <p>{this.props.formData.address1}</p>
            <p>{this.props.formData.address2}</p>
            <p>
              {this.props.formData.city} {this.props.formData.postcode}
            </p>
          </div>
          <div className="display--left--infoSection">
            <h5>Email</h5>
            <p>{this.props.formData.email}</p>
          </div>
          <div className="display--left--infoSection">
            <h5>Phone No.</h5>
            <p>{this.props.formData.phoneNo}</p>
          </div>

          <div className="display--left--divider">
            <h3>Skills</h3>
          </div>
          <div className="display--left--skills">
            <ul>{mappedSkills}</ul>
          </div>
        </div>

        <div className="display--right">
          <p className="display--right--description">
            {this.props.formData.description}
          </p>
          <h4>Experience</h4>
          <div className="lineBreak"></div>
          {mappedExperience}
          <h4>Education</h4>
          <div className="lineBreak"></div>
          {mappedEducation}
          <h4>Personal Interests</h4>
          <div className="lineBreak"></div>
          <div className="display--right--personalInterests">
            <p>{this.props.formData.interests}</p>
          </div>
        </div>
      </div>
    );
  }
}
