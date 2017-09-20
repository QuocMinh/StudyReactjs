function getName(name) {
    alert(name);
}

let QuocMinh = React.createClass({
    layThongTin: function() {
        alert(this.props.giangvien);
    },
    getInitialState() {
        return {
            tongHocVien: this.props.tongHocVien
        };
    },
    render: function() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <p>So hoc vien: {this.state.tongHocVien}</p>

                <button onClick={this.layThongTin}>Thong tin</button>
                <button onClick={() => {
                    let str = this.props.ten + " " + this.props.giangvien;
                    getName(str)
                }}>Global Function</button>
                <button onClick={() => {
                    this.state.tongHocVien = Number(this.state.tongHocVien) + 1;

                    this.setState(this.state);
                }}>Dang ky hoc</button>
                
                <KhoaHoc ten={this.props.ten}/>
            </div>
        );
    }
});

let KhoaHoc = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Lap trinh {this.props.ten}</h3>
            </div>
        );
    }
});

let InputTag = React.createClass({
    render() {
        return (
            <div>
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Hien thi</button>
            </div>
        );
    },
    show() {
        let text = this.refs.txt.value;
        let select = this.refs.sl.value
        alert(select);
    }
});

ReactDOM.render(
    <div>
        <InputTag></InputTag>
        <QuocMinh ten="Reactjs" giangvien="Mr.Khoa" tongHocVien="10">Mon hoc Reactjs</QuocMinh>
        <QuocMinh ten="Nodejs" giangvien="Mr.Minh" tongHocVien="20">Mon hoc Nodejs</QuocMinh>
    </div>
    ,
    document.getElementById('root')
);
