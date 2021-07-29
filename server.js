const open = require('open');

const express = require('express');
const app = express();
const port = 3000;
var url = `http://localhost:${port}/home`;

app.get('/', (req, res) => {
    res.send('Welcome on vivan site')
})

app.listen(port, () => {
    console.log(`vivan app listening at http://localhost:${port}`);
})

app.get('/home', (req, res) => {
    console.log(`name dir ${__dirname}`);
    res.sendFile('index.html', { root: __dirname });
});

app.use("/dist", express.static(__dirname + '/dist'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/webfonts", express.static(__dirname + '/webfonts'));

// Opens the URL in the default browser.
open(url,{app: {name: 'chrome'}});