let Hello = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn" onClick={this.addHello}>Hello {this.state.soLanHello}</button>
      </div>
    );
  },
  getInitialState() {
    return {
      soLanHello: this.props.soLanHello
    }
  },
  addHello() {
    this.setState({
      soLanHello: Number(this.state.soLanHello) + 1
    });
  }
});

ReactDOM.render (
  // du lieu can render
  <Hello soLanHello="0"></Hello>
  ,
  // vi tri muon render
  document.getElementById('root')
);