import React from "react";
import Navbar from "./components/Nav";
import Personal from "./components/Personal";
import "./App.css";
import CVDisplay from "./components/CVDisplay";

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
      description: "blahblahblahblah",
    };
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="cvFormContainer">
            <Personal formData={this.state} handleChange={this.handleChange} />
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
