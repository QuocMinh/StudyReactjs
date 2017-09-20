let Note = React.createClass(
  {
    render: function() {
      return (
        <section>
          <h1>
            {this.props.children}
          </h1>
        </section>
      )
    }
  }
);

let List = React.createClass(
  {
    render: function() {
      return (
        <div>
          <button onClick={this.add}>
            Them
          </button>
          {
            this.state.array.map((note, index) => {
              return <Note key={index}>{note}</Note>
            })
          }
        </div>
      );
    },
    getInitialState() {
      return {
        array: [
          'Hello',
          'Hi',
          'Quoc Minh'
        ]
      };
    },
    add() {
      this.state.array.push("Nodejs", "Reactjs");
      this.setState(this.state);
    }
  }
);

ReactDOM.render(
  <div>
    <List></List>
  </div>
  ,
  document.getElementById('root')
);