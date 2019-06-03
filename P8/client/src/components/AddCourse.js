"use strict";

import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";
export default class AddCourse extends Component {
  constructor(props) {
    super(props);

    this.updatename = this.updatename.bind(this);
    this.updatecode = this.updatecode.bind(this);
    this.updatepassmark = this.updatepassmark.bind(this);
    this.updatelectureIncharge = this.updatelectureIncharge.bind(this);
    this.updatesubjects = this.updatesubjects.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      code: "",
      passmark: "",
      lectureIncharge: "",
      subjects: ""
    };
  }

  updatecode(e) {
    this.setState({ code: e.target.value });
  }

  updatename(e) {
    this.setState({ name: e.target.value });
  }
  updatepassmark(e) {
    this.setState({ passmark: e.target.value });
  }
  updatelectureIncharge(e) {
    this.setState({ lectureIncharge: e.target.value });
  }
  updatesubjects(e) {
    this.setState({ subjects: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let strvale = this.state.subjects;
    let arr = strvale.split(",");
    const meo = {
      name: this.state.name,
      code: this.state.code,
      passmark: this.state.passmark,
      lectureIncharge: this.state.lectureIncharge,
      subjects: arr
    };
    axios
      .post("http://localhost:3000/api/messages/courses/add", meo)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      code: "",
      passmark: "",
      lectureIncharge: "",

      subjects: ""
    });
  }

  render() {
    return (
      <div>
        <br />
        <Container>
          <Form onSubmit={this.onSubmit}>
            <Label>
              <strong>
                <font size="4">Add Course Details</font>
              </strong>
            </Label>
            <FormGroup>
              <Label htmlFor="validationTooltip01">Name</Label>
              <Input
                placeholder="Enter Course Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.updatename}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="validationTooltip01">Code</Label>
              <Input
                placeholder="Enter Course Code"
                type="text"
                name="code"
                value={this.state.code}
                onChange={this.updatecode}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="validationTooltip02">Pass Mark</Label>
              <Input
                placeholder="Enter Course Pass Mark"
                type="text"
                name="passmark"
                value={this.state.passmark}
                onChange={this.updatepassmark}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="validationTooltip02">Lecturer in Charge</Label>
              <Input
                placeholder="Enter Course Lecturer in Charge"
                type="text"
                name="passmark"
                value={this.state.lectureIncharge}
                onChange={this.updatelectureIncharge}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="validationTooltip03">Subjects</Label>
              <Input
                placeholder="Enter Course Subjects Separated by , s"
                type="text"
                name="subjects"
                value={this.state.subjects}
                onChange={this.updatesubjects}
                required
              />
            </FormGroup>

            <Button className="btn btn-success" type="submit">
              Add Course
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
