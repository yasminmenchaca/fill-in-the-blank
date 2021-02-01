import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";

class Message extends Component {
  constructor(props) {
    super(props);
    this.recruiterName = this.recruiterName.bind(this);
    this.position = this.position.bind(this);
    this.company = this.company.bind(this);
    this.technologyLanguages = this.technologyLanguages.bind(this);
    this.myName = this.myName.bind(this);

    this.state = {
      company: "",
      recruiterName: "",
      position: "",
      technologyLanguages: "",
      myName: "",
    };
  }

  recruiterName(e) {
    this.setState({ recruiterName: e.target.value });
  }

  position(e) {
    this.setState({ position: e.target.value });
  }

  company(e) {
    this.setState({ company: e.target.value });
  }

  technologyLanguages(e) {
    this.setState({ technologyLanguages: e.target.value });
  }

  myName(e) {
    this.setState({ myName: e.target.value });
  }

  render() {
    // const mystyle = {
    //   padding: "10px",
    //   fontFamily: "Arial",
    // };

    return (
      <div>

          <Form>
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="myName"
                onChange={this.myName}
                placeholder="Your Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Recruiter's name</Form.Label>
              <Form.Control
                type="text"
                name="recruiterName"
                onChange={this.recruiterName}
                placeholder="Recruiter"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                onChange={this.position}
                placeholder="Position"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                onChange={this.company}
                placeholder="Company"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Technologies and Languages</Form.Label>
              <Form.Control
                type="text"
                name="technologyLanguages"
                onChange={this.technologyLanguages}
                placeholder="Technologies and Languages"
              />
            </Form.Group>
          </Form>

          <p>
            Dear {this.state.recruiterName},
            <br />I am reaching out, as I have recently applied to{" "}
            {this.state.position} at {this.state.company}. I want to introduce
            myself and learn more about {this.state.company}. My name is{" "}
            {this.state.myName}, and I want to continue developing my career on
            the same path. {this.state.company} has a great reputation for
            developing skills and careers, and I’d like to learn more about how{" "}
            {this.state.company} empowers their coders to achieve their goals.
            Attached you will see my resume and cover letter I applied with. If
            these skills are what you’re seeking for this position, I think I
            would be a great fit based on my experience in{" "}
            {this.state.technologyLanguages}. I’d like to connect soon to
            discuss this or similar jobs and how I might add value to{" "}
            {this.state.company}.
            <br />
            <br />
            Sincerely, <br />
            {this.state.myName}
          </p>

      </div>
    );
  }
}

export default Message;
