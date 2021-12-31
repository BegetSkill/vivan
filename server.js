const open = require('open');
const express = require('express');
const app = express();
const path = require('path');

var url = "";

var server = function () {

    function configServer(port) {
        url = `http://localhost:${port}`;
        app.listen(port, () => {
            console.log(`vivan app listening at http://localhost:${port}`);
        });
        routing();
        confifPublicDirectories();
    }

    function openDefault() {
        // Opens the URL in the default browser.
        open(url, { app: { name: 'chrome' } });
    }

    function routing() {

        /* app.get('/', (req, res) => {
             res.sendFile('index.html', { root: __dirname });
         });*/

        app.use(express.static(__dirname));


        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname + '/index.html'));
        });
    }

    function confifPublicDirectories() {
        app.use("/dist", express.static(__dirname + '/dist'));
        app.use("/js", express.static(__dirname + '/js'));
        app.use("/css", express.static(__dirname + '/css'));
        app.use("/img", express.static(__dirname + '/img'));
        app.use("/webfonts", express.static(__dirname + '/webfonts'));
        app.use("/data", express.static(__dirname + '/data'));
    }

    return {
        ConfigServer: configServer,
        OpenDefault: openDefault
    }
}();

server.ConfigServer(3000);
server.OpenDefault();