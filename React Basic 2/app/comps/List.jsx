let React = require('react');
let ReactDOM = require('react-dom');
let Note = require('./Note.jsx');
let NoteForm = require('./NoteForm.jsx');

let List = React.createClass({
  render() {
    return (
      <div>
        <button onClick={this.new}>Tạo note mới</button>
        <div id="div-note-form"></div>
        {
          this.state.arrNote.map((note, index) => {
            return (
              <Note key={index} remove={this.del} index={index}>
                {note}
              </Note>
            )
          })
        }
      </div>
    );
  },
  getInitialState() {
    return {
      arrNote: ['Android', 'iOS', 'Nodejs']
    }
  },
  del(index) {
    this.state.arrNote.splice(index, 1);
    this.setState(this.state);
  },
  save(note) {
    this.state.arrNote.unshift(note);
    this.setState(this.state);
  },
  new() {
    ReactDOM.render(
      <NoteForm save={this.save}/>
      , document.getElementById('div-note-form')
    );
  },
});

module.exports = List;