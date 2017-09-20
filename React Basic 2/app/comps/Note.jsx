let React = require('react');

let Note = React.createClass({
  render() {
    return(
      <div id="div-note">
        <p>{this.props.children}</p>
        <button onClick={this.del}>Delete</button>
      </div>
    );
  },
  del() {
    this.props.remove(this.props.index);
  }
});

module.exports = Note;