import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin } from "../actions/userAction";
class Login extends Component {
  /*componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push("/");
    }
  }*/
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="jumbotron col-sm-12">
            <h1>Diary | {new Date().getFullYear()}</h1>
            <h2>
              <em>Login with Social Network</em>
            </h2>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger btn-lg"
              onClick={this.props.googleLogin}
            >
              Login With Google
            </button>
            <br />
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary btn-lg disabled">
              Login With Twitter
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { googleLogin }
)(Login);
