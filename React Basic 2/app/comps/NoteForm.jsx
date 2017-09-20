let React = require('react');
let ReactDOM = require('react-dom');

let NoteForm = React.createClass({
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter your note" ref="txt"/>
        <button onClick={this.send}>Gửi</button>
      </div>
    );
  },
  send() {
    this.props.save(this.refs.txt.value);

    // Delete Note form from GUI
    ReactDOM.unmountComponentAtNode(document.getElementById('div-note-form'));
  }  
});

module.exports = NoteForm;