"use strict";
import React, { Component } from "react";
import axios from "axios";
import { Container, Label } from "reactstrap";

export default class GetSubjects extends Component {
  constructor(props) {
    super(props);
    this.getsubjects = this.getsubjects.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      keyword: "",
      data: { subjects: [] }
    };
  }
  getsubjects(e) {
    this.setState({ keyword: e.target.value });
  }
  onSearch(e) {
    e.preventDefault();
    const searchsub = {
      keyword: this.state.keyword
    };
    console.log(this.state.keyword);
    axios
      .get(`http://localhost:3000/api/messages/courses/${this.state.keyword}`)
      /*
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      });
*/

      .then(response => {
        console.log("RESPONSE");
        console.log(response);
        this.setState({
          data: response.data
          // --------------------^^^^^^^^^
        });
      });

    console.log(this.state.keyword);
    console.log(this.state.data);
    // this.setState({
    // keyword: ""
    //});
  }
  componentDidMount() {}

  render() {
    const course = this.state.data;
    //console.log(course);
    //console.log("COURSE");
    //console.log(course.subjects);
    console.log("STRING");
    console.log(course.subjects.toString());
    //console.log("COURSE");
    //console.log(course);
    return (
      <div>
        <br />
        <Container>
          <div>
            <label>Course Name</label>{" "}
            <input
              placeholder="Enter Course Name"
              type="text"
              value={this.state.keyword}
              onChange={this.getsubjects}
              name="keyword"
              required
            />{" "}
            <button className="btn btn-primary" onClick={this.onSearch}>
              Get Subjects
            </button>
          </div>
          <br />

          <ul> {course.subjects.join(", ")}</ul>
        </Container>
      </div>
    );
  }
}
