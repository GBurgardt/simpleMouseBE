//////////////////////////////////////////////
////////////////// EXPRESS ///////////////////
//////////////////////////////////////////////

var express = require('express');
var expressApp = express();

var ffi = require("ffi");

const cors = require('cors')
expressApp.use(cors());

expressApp.get('/', function (req, res) {
    res.send('Hello World!');
});

expressApp.get('/mouse/move/:deltaX/:deltaY', function (req, res) {
    
    // const mousePosi = robot.getMousePos();
    const mousePosi = null;

    const deltaX = Number(req.params.deltaX);
    const deltaY = Number(req.params.deltaY);

    if (process.platform === "win32") {

        var user32 = ffi.Library('user32', {
            'SetCursorPos': [ 'long', ['long', 'long'] ]
            // put other functions that you want to use from the library here, e.g., "GetCursorPos"
        });
        
        var result = user32.SetCursorPos(10, 10);
        console.log(result);
    }


    res.send({
        oldCords: mousePosi,
        newCords: robot.getMousePos()
    })
});

expressApp.get('/mouse/click/:type', function (req, res) {
    const type = req.params.type;

    // robot.mouseClick(type)

    res.send('ok')
})

expressApp.listen(
    5000, 
    () => {
        console.log('Listening on port 5000!');
    }
);

//////////////////////////////////////////////
////////////////// Electron //////////////////
//////////////////////////////////////////////

const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        useContentSize: true,
        resizable: false,
    });

    mainWindow.loadURL('http://localhost:5000/');
    mainWindow.focus();
})

