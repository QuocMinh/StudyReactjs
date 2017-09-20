let input;

class Hello extends React.Component {
  constructor(state) {
    this.state = state;
  }
  render() {
    return (
      <div>
        <input type="text" ref="txt"/>
        <p>Result: <b>{this.state.result}</b></p>
        <button onClick={this.handleInput}>Save</button>
      </div>
    );
  };
  handleInput() {
    console.log(input.refs.txt.value);
  };
  
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
);