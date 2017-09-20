let list;

let Note = React.createClass({
  render: function() {
    if(this.state.onEdit) {
      return (
        <div className="div-note">
          <input type="text" defaultValue={this.props.children} ref="txt"/>
          <button onClick={this.save}>Lưu</button>
          <button onClick={this.cancel}>Hủy</button>
        </div>
      );
    } else {
      return (
        <div className="div-note">
          <p>{this.props.children}</p>
          <button onClick={this.delete}>Xóa</button>
          <button onClick={this.edit}>Sửa</button>
        </div>
      );
    }
  },
  delete() {
    $.post("/delete", {idDelete: this.props.id}, (data) => {
      list.setState({arrNote: data});
    });
  },
  edit() {
    this.setState({onEdit: true});
  },
  getInitialState() {
    return {
      onEdit: false
    }
  },
  save() {
    $.post("/save", {newVal: this.refs.txt.value, idSave: this.props.id}, (data) => {
      list.setState({arrNote: data});
    });
    this.setState({onEdit: false});
  },
  cancel() {
    this.setState({onEdit: false});
  }
});

function addDiv() {
  ReactDOM.render(
    <InputDiv/>,
    document.getElementById('div-add')
  );
}

let List = React.createClass({
  render: function() {
    return (
      <div className="div-list">
        <button onClick={addDiv}>Thêm</button>
        <div id="div-add"></div>
        {
          this.state.arrNote.map((note, index) => {
            return <Note key={index} id={index}>{note}</Note>
          })
        }
      </div>
    );
  },
  getInitialState() {
    list = this;
    return {
      arrNote: []      
    }
  },
  componentDidMount() {
    $.post("/bt6", (data) => {
      this.setState({arrNote: data});
    });
  }
});

let InputDiv = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note"/>
        <button onClick={this.send}>Lưu</button>
      </div>
    );
  },
  send() {
    $.post("/add", {note: this.refs.txt.value}, (data) => {
      list.setState({arrNote: data});
    });
    ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
  }
});

class Test extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note"/>
        <button onClick={this.send}>Lưu</button>
      </div>
    );
  };
}

ReactDOM.render(
  <section>
    <Test></Test>
    
  </section>,
  document.getElementById('root')
);