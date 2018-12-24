import React from "react";
import NotePage from "./NotePage";
import ViewNotes from "./ViewNotes";

class Notebook extends React.Component {
  state = {
    noteAdded: false,
    noteSaved: false,
    pageCount: 0,
    notebook: [
      { title: "", questionAnswer: [{ ques: "", ans: "" }], summary: "" }
    ]
  };

  handleNoteAdded = () => {
    this.setState({
      noteAdded: true
    });
  };
  handleAddNotes = () => {
    let notebookCopy = this.state.notebook.slice();
    let id = this.state.pageCount;
    notebookCopy[id].questionAnswer.push({ ques: "", ans: "" });
    this.setState({
      notebook: notebookCopy
    });
  };

  handleSubmitForm = event => {
    this.setState({
      pageCount: this.state.pageCount + 1,
      noteSaved: true
    });
    event.preventDefault();
  };

  handleChange = () => {
    let notebookCopy = this.state.notebook.slice();
    let id = this.state.pageCount;
    if (["ques", "ans"].includes(event.target.className)) {
      let questionAnswer = notebookCopy[id].questionAnswer;
      questionAnswer[event.target.dataset.id][event.target.className] =
        event.target.value;
      this.setState({ notebook: notebookCopy });
    } else {
      notebookCopy[id][event.target.name] = event.target.value;
      this.setState({ notebook: notebookCopy });
    }
  };

  render() {
    const title = this.props.title;
    let { noteAdded, pageCount, noteSaved } = this.state;
    if (noteSaved === true) {
      return (
        <div>
          <ViewNotes />
        </div>
      );
    }
    if (noteAdded === false) {
      return (
        <div>
          <p>Hi I am just a notebook called {title}</p>
          <button onClick={this.handleNoteAdded}>Add Page</button>
        </div>
      );
    } else {
      return (
        <div>
          <NotePage
            notebookData={this.state.notebook[pageCount]}
            controlFunc={this.handleChange}
            submitFormFunc={this.handleSubmitForm}
            addNotesFunc={this.handleAddNotes}
          />
        </div>
      );
    }
  }
}

export default Notebook;
