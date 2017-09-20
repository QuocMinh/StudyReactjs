let ShowPicture = React.createClass({
  render: function() {
    return (
      <div>
        <img className="img" src={this.state.picture} />
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
  num: 0,
  getInitialState() {
    return {
      picture: this.pictures[this.num]
    };
  },
  changeImage() {
    if(this.num < this.pictures.length - 1) {
      this.state.picture = this.pictures[this.num += 1];
    } else {
      this.state.picture = this.pictures[this.num = 0];
    }

    this.setState(this.state);
  },
  componentDidMount() {
    setInterval(this.changeImage, 1000);
  }
})

ReactDOM.render (
  <ShowPicture/>
  ,
  document.getElementById('root')
);