let ShowPicture = React.createClass({
  render: function() {
    return (
      <div>
        <img className="img" src={this.state.picture} />
        <hr/>
        <button onClick={this.onNext}>Next</button>
        <button onClick={this.onPrev}>Previous</button>
      </div>
    );
  },
  pictures: [
    'https://image.freepik.com/free-vector/angry-birds-pig-vector_646630.jpg',
    'https://vignette3.wikia.nocookie.net/angrybirdsfanon/images/d/df/Cut_Pig.jpg/revision/latest?cb=20120513074744',
    'https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2016/02/30123942/terence-image.png',
    'https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2016/04/28145404/action_videohighligh_frg3.png',
    'https://images-na.ssl-images-amazon.com/images/I/41hIi9M0ojL._SL500_AC_SS350_.jpg'
  ],
  getInitialState() {
    return {
      num: 0,
      picture: this.pictures[0]
    };
  },
  onNext() {
    if(this.state.num < this.pictures.length - 1) {
      this.state.picture = this.pictures[this.state.num += 1];
    }
    this.setState(this.state);
  },
  onPrev() {
    if(this.state.num > 0) {
      this.state.picture = this.pictures[this.state.num -= 1];
    }
    this.setState(this.state);
  }
})

ReactDOM.render (
  <ShowPicture/>
  ,
  document.getElementById('root')
);