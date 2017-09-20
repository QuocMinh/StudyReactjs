let express = require('express');
let bodyParser = require('body-parser');
let parser = bodyParser.urlencoded({extended: false});
let app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000);

app.get('/', (req, res) => {
    res.render("trangchu");
});
app.get('/bt1', (req, res) => {
    res.render("baitap1");
});
app.get('/bt2', (req, res) => {
    res.render("baitap2");
});
app.get('/bt3', (req, res) => {
    res.render("baitap3");
});
app.get('/bt4', (req, res) => {
    res.render("baitap4");
});
app.get('/bt5', (req, res) => {
    res.render("baitap5");
});
app.get('/new-way', (req, res) => {
    res.render("newWay");
});

// QUAN LY NOTE

app.get('/bt6', (req, res) => {
    res.render("baitap6");
});

let arrNote = [
    "Android",
    "iOS",
    "PHP",
    "Reactjs"
];

app.post('/bt6', (req, res) => {
    res.send(arrNote);
});

app.post('/add', parser, (req, res) => {
    let newNote = req.body.note;
    arrNote.unshift(newNote);
    res.send(arrNote);
});

app.post('/delete', parser, (req, res) => {
    let id = req.body.idDelete;
    arrNote.splice(id, 1);
    res.send(arrNote);
});

app.post('/save', parser, (req, res) => {
    let id = req.body.idSave;
    let newVal = req.body.newVal;
    arrNote[id] = newVal;
    res.send(arrNote);
});