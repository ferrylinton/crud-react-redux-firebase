import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SubmitComment from "./SubmitComment";
import _ from "lodash";
import Comment from "./Comment";
class NoteDetail extends Component {
  renderComments() {
    const { note } = this.props;
    // const data=note.comments;

    //const commentLenght=0
    return _.map(note.comments, (comment, key) => {
      //const count = Object.keys(key);
      //console.log(count);
      return (
        <Comment key={key} id={key}>
          {comment.commentBody}
        </Comment>
      );
    });
  }

  render() {
    const { note } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <SubmitComment id={this.props.match.params.id} />
            {this.renderComments()}

            <br />
            <Link to="/"> &#171; Back</Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id],
    uid: "bZXIInL7uIUkrdRyAb1dJp3w7B62"
  };
}

export default connect(mapStateToProps)(NoteDetail);
