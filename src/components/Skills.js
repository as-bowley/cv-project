import React from "react";
import "../styles/Skills.css";

export default class Skills extends React.Component {
  render() {
    const mappedSkills = this.props.formData.skills.map((skill) => (
      <button
        key={skill.id}
        onClick={this.props.onClick}
        value={skill.text}
        id={skill.id}
      >
        {skill.text} <small>X</small>
      </button>
    ));
    return (
      <div className="skillsForm">
        <h3>Skills</h3>
        <input
          type="text"
          name="skills"
          placeholder="Enter skill here"
          value={this.props.formData.skill.text}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.onSubmit} type="submit">
          Add
        </button>
        <div className="skillsEditList">{mappedSkills}</div>
      </div>
    );
  }
}
