import React from "react";
import Navbar from "./components/Nav";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Interests from "./components/Interests";
import "./App.css";
import CVDisplay from "./components/CVDisplay";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "John",
      surname: "Madden",
      jobTitle: "Web Developer",
      address1: "Bonner Talweg 235",
      address2: "",
      city: "Bonn",
      postcode: "53129",
      phoneNo: "0181515892",
      email: "email@email.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ullamcorper pharetra, dictum gravida egestas ac. Cras felis sed est, nullam consectetur feugiat. Orci purus volutpat, dolor placerat et nisi, at. Vel congue etiam porta sit sagittis. Non convallis aliquet eget leo rhoncus. Sed semper massa dignissim tincidunt. Pulvinar tristique porttitor a ultricies sit diam fames est. Et mauris congue sed viverra vulputate diam sit non. Pellentesque integer parturient ornare interdum sit sit nulla orci. ",
      skill: {
        text: "",
        id: uniqid(),
      },
      skills: [],
      currentExperience: {
        position: "Software Developer",
        company: "Google",
        location: "London",
        from: "2017",
        to: "Present",
        jobdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sit porttitor eget turpis pellentesque donec. Eu vivamus enim leo elementum. Donec pellentesque pellentesque quis etiam malesuada purus. Aliquam ullamcorper quam viverra integer sollicitudin tempor. Mattis purus id placerat sapien sit in malesuada. Integer etiam urna nisi amet urna ullamcorper id montes. Ut at commodo.",
        id: uniqid(),
      },
      experience: [],
      education: {
        school: "Manchester University",
        location: "Manchester",
        quali: "Bachelors",
        subject: "Computer Science",
        from: "2011",
        to: "2014",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ante diam mi nulla mollis fringilla tellus gravida. Tortor, pretium egestas tristique lacinia vitae molestie purus. Vulputate vestibulum metus orci sit et. Tellus dictum mauris donec sit urna, mauris id metus egestas. Odio urna sed ultricies lacus est ultricies auctor fusce. ",
        id: uniqid(),
      },
      qualifications: [],
      interests:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ante diam mi nulla mollis fringilla tellus gravida. Tortor, pretium egestas tristique lacinia vitae molestie purus. Vulputate vestibulum metus orci sit et. Tellus dictum mauris donec sit urna, mauris id metus egestas. Odio urna sed ultricies lacus est ultricies auctor fusce.",
    };
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      [event.target.name]: event.target.value,
    }));
  };

  skillChange = (event) => {
    this.setState({
      skill: {
        text: event.target.value,
        id: this.state.skill.id,
      },
    });
  };

  skillSubmit = (event) => {
    event.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        text: "",
        id: uniqid(),
      },
    });
  };

  skillRemove = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      skills: prevState.skills.filter((skill) => skill.id !== event.target.id),
    }));
  };

  experienceChange = (event) => {
    this.setState((prevState) => ({
      currentExperience: {
        ...prevState.currentExperience,
        [event.target.name]: event.target.value,
      },
    }));
  };

  experienceSubmit = (event) => {
    event.preventDefault();
    this.setState({
      experience: this.state.experience.concat(this.state.currentExperience),
      currentExperience: {
        position: "",
        company: "",
        location: "",
        from: "",
        to: "",
        jobdescription: "",
        id: uniqid(),
      },
    });
  };

  experienceRemove = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      experience: prevState.experience.filter(
        (experience) => experience.id !== event.target.id
      ),
    }));
  };

  educationChange = (event) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [event.target.name]: event.target.value,
      },
    }));
  };

  educationSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
    this.setState({
      qualifications: this.state.qualifications.concat(this.state.education),
      education: {
        school: " ",
        location: "",
        quali: "",
        subject: "",
        from: "",
        to: "",
        description: "",
        id: uniqid(),
      },
    });
  };

  educationRemove = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      qualifications: prevState.qualifications.filter(
        (qualification) => qualification.id !== event.target.id
      ),
    }));
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="cvFormContainer">
            <Personal formData={this.state} handleChange={this.handleChange} />
            <Skills
              formData={this.state}
              onSubmit={this.skillSubmit}
              handleChange={this.skillChange}
              onClick={this.skillRemove}
            />
            <Experience
              formData={this.state}
              handleChange={this.experienceChange}
              onSubmit={this.experienceSubmit}
              onClick={this.experienceRemove}
            />
            <Education
              formData={this.state}
              handleChange={this.educationChange}
              onSubmit={this.educationSubmit}
              onClick={this.educationRemove}
            />
            <Interests formData={this.state} handleChange={this.handleChange} />
          </div>
          <div className="cvDisplay">
            <CVDisplay formData={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
