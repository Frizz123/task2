import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json({
    hello: 'JS World',
});
});

app.get('/task2A', (req, res) => {
    const sum = (+req.query.a || 0) + (+req.query.b || 0);
res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
    const fullname = req.query.fullname;
var parts = fullname.split(' ');
var partsLenght = parts.length;
var resp = 'Invalid fullname';
if(partsLenght<4 && fullname.length>0) {
    switch(partsLenght) {
        case 1:
            resp = parts[0];
            break
        case 2:
            resp = parts[partsLenght - 1] + ' ' + parts[0].substr(0, 1) + '.';
            break
        case 3:
            resp = parts[partsLenght - 1] + ' ' + parts[0].substr(0, 1) + '.' + ' ' + parts[1].substr(0, 1) + '.';
            break
    }
}
res.send(resp.toString());
});

app.get('/task2C', (req, res) => {
    const link = req.query.username;
var resp = 'Invalid username';
if (link && link.length > 0) {
    var parts = link.split('/');
    var partsLenght = parts.length;
    if(partsLenght == 1) {
        resp = '@'+parts[0].replace('@','');
    } else {
        resp = '@'+parts[partsLenght-1].replace('@','');
    }
}
res.send(resp.toString());
});

app.listen(3000, () => {
    console.log('Your app listening on port 3000!');
});
