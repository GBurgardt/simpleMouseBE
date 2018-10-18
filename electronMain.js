

const { app, BrowserWindow } = require('electron')
  
function createWindow () {
    // Crea la ventana del navegador.
    // win = new BrowserWindow({ width: 800, height: 600 })

    // win.loadURL('file://' + __dirname + '/indexElectron.html');

    // Crea la ventana del navegador.
    win2 = new BrowserWindow({ width: 800, height: 600 })

    win2.loadURL('file://' + __dirname + '/index.html');
    
}

app.on('ready', createWindow)

