import React, { Component } from "react";
//import _ from "lodash";

import _ from "lodash";
import { connect } from "react-redux";
import { getNotes, saveNote, deleteNote } from "../actions/notesAction";
import NoteCard from "./NoteCard";
import { getUser } from "../actions/userAction";
import { Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      commentsCount: 0
    };
  }
  //lifeCycle
  componentDidMount() {
    /*database.on('value',(snapshot)=>{
            this.setState({
                notes:snapshot.val()
            })
        })*/
    this.props.getNotes();
    this.props.getUser();
  }
  //handle change
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  //handle submit
  handleSubmit = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      uid: "YwYUtxOzrBbPGqI1RuoSKF0XPSJ3"
    };
    // database.push(note);
    this.props.saveNote(note);
    this.setState({
      title: "",
      body: ""
    });
  };
  renderCommentsKey = () => {
    //const { note } = this.props;
    return _.map(this.props.notes.comments, key => {
      console.log(key.length + 1);
      return <div>{key.length}</div>;
    });
  };
  //render note Map
  renderNote = () => {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <p>{this.renderCommentsKey()}</p>
          <Link to={`/${key}`}>
            <h2>{note.title}</h2>
          </Link>
          <p>{note.body}</p>

          <div>
            <button
              className="btn btn-danger btn-xs"
              onClick={() => this.props.deleteNote(key)}
            >
              Delete
            </button>
            <button className="btn btn-warning btn-xs right">
              <Link to={`/${key}/edit`}>Update</Link>
            </button>
          </div>
        </NoteCard>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Welcome React</h1>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.body}
                  name="body"
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.renderNote()}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user,
    uid: "bZXIInL7uIUkrdRyAb1dJp3w7B62"
  };
}
export default connect(
  mapStateToProps,
  { getNotes, saveNote, deleteNote, getUser }
)(App);
