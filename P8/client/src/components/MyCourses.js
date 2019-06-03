import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Label } from "reactstrap";
import axios from "axios";

export default class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      info: []
    };

    axios.get("http://localhost:3000/api/messages/courses/").then(response => {
      console.log(response);
      //this.setState({data: response.data});
      console.log(response.data);
      this.setState({ info: response.data });
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <br />

        <Container>
          <Label>
            <strong>
              <font size="4">View Course Details</font>
            </strong>
          </Label>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Course Code</th>
                <th scope="col">Course Name</th>
                <th scope="col">Pass Mark</th>
                <th scope="col">Lecturer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.info.map(function(course) {
                //console.log(course._id);
                return (
                  <tr key={course._id}>
                    <td>{course.code}</td>
                    <td>{course.name}</td> <td>{course.passmark}</td>
                    <td>{course.lectureIncharge}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}
