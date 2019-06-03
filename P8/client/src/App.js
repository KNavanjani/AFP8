import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

import AddCourse from "./components/AddCourse";
import MyCourses from "./components/MyCourses";
import GetSubjects from "./components/GetSubjects";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/messages", { method: "GET" })
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({ message: jsonRes.message });
      })
      .catch(err => {
        this.setState({ message: "An error occurred" });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <h2>{this.state.message}</h2>
          <br />

          <Router>
            <div>
              <Button color="warning">K</Button>
              <div className="row">
                <div className="col-sm">
                  <Link to="/addco">Add Course</Link>
                </div>
                <div className="col-sm">
                  <Link to="/myco">View Courses</Link>
                </div>
                <div className="col-sm">
                  <Link to="/getsub">Get Subjects</Link>
                </div>
              </div>

              <Route
                path="/addco"
                render={props => {
                  return <AddCourse />;
                }}
              />
              <Route
                path="/myco"
                render={props => {
                  return <MyCourses />;
                }}
              />
              <Route
                path="/getsub"
                render={props => {
                  return <GetSubjects />;
                }}
              />
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}
