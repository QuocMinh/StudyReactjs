let Note = React.createClass(
  {
    render: function() {
      return (
        <section>
          <img className="img" src={this.props.src}/>
          <h1>{this.props.children}</h1>
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
              return <Note key={index} src={note.src}>{note.content}</Note>
            })
          }
        </div>
      );
    },
    getInitialState() {
      return {
        array: [
          {
            src: "https://image.freepik.com/free-vector/angry-birds-pig-vector_646630.jpg",
            content: "Hello"
          },
          {
            src: "https://vignette3.wikia.nocookie.net/angrybirdsfanon/images/d/df/Cut_Pig.jpg/revision/latest?cb=20120513074744",
            content: "Hi"
          },
          {
            src: "https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2016/02/30123942/terence-image.png",
            content: "Quoc Minh"
          }
        ]
      };
    },
    add() {
      this.state.array.unshift(
        {
          src: "https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2016/04/28145404/action_videohighligh_frg3.png",
          content: "New"
        }
      );
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