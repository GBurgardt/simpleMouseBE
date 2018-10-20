const { app, BrowserWindow } = require('electron')

var path = require('path');
  
function createWindow () {
    win2 = new BrowserWindow({ width: 800, height: 600 })

    win2.loadURL(
        path.join('file://', __dirname, '/index.html')
    );    
}

app.on('ready', createWindow)

