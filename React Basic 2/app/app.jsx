let React = require('react');
let ReactDOM = require('react-dom');

// let Note = React.createClass({
//   render() {
//     return(
//       <div id="div-note">
//         <p>{this.props.children}</p>
//         <button onClick={this.del}>Delete</button>
//       </div>
//     );
//   },
//   del() {
//     this.props.remove(this.props.index);
//   }
// });

// let NoteForm = React.createClass({
//   render() {
//     return (
//       <div>
//         <input type="text" placeholder="Enter your note" ref="txt"/>
//         <button onClick={this.send}>Gửi</button>
//       </div>
//     );
//   },
//   send() {
//     this.props.save(this.refs.txt.value);

//     // Delete Note form from GUI
//     ReactDOM.unmountComponentAtNode(document.getElementById('div-note-form'));
//   }  
// });

// let List = React.createClass({
//   render() {
//     return (
//       <div>
//         <button onClick={this.new}>Tạo note mới</button>
//         <div id="div-note-form"></div>
//         {
//           this.state.arrNote.map((note, index) => {
//             return (
//               <Note key={index} remove={this.del} index={index}>
//                 {note}
//               </Note>
//             )
//           })
//         }
//       </div>
//     );
//   },
//   getInitialState() {
//     return {
//       arrNote: ['Android', 'iOS', 'Nodejs']
//     }
//   },
//   del(index) {
//     this.state.arrNote.splice(index, 1);
//     this.setState(this.state);
//   },
//   save(note) {
//     this.state.arrNote.unshift(note);
//     this.setState(this.state);
//   },
//   new() {
//     ReactDOM.render(
//       <NoteForm save={this.save}/>
//       , document.getElementById('div-note-form')
//     );
//   },
// });

let List = require('./comps/List.jsx');

ReactDOM.render(
  <List></List>,
  document.getElementById('root')
);

