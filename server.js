var express = require('express');
var expressApp = express();
const robot = require("robotjs");

//////////////////////////////////////
////////// Configuraciones ///////////
//////////////////////////////////////

const cors = require('cors')
expressApp.use(cors());

//////////////////////////////////////
//////// Fin Configuraciones /////////
//////////////////////////////////////

expressApp.get('/', function (req, res) {
    res.send('Hello World!');
});

expressApp.get('/mouse/move/:deltaX/:deltaY', function (req, res) {
    
    const mousePosi = robot.getMousePos();

    const deltaX = Number(req.params.deltaX);
    const deltaY = Number(req.params.deltaY);

    robot.moveMouse(
        Number(mousePosi.x + deltaX),
        Number(mousePosi.y + deltaY)
    );

    res.send({
        oldCords: mousePosi,
        newCords: robot.getMousePos()
    })
});

expressApp.get('/mouse/click/:type', function (req, res) {
    const type = req.params.type;
    robot.mouseClick(type)
    res.send('ok')
})


//////////////////////////////////////
/////////// Inicialización ///////////
//////////////////////////////////////

expressApp.listen(
    5000, 
    () => {
        console.log('Listening on port 5000!');
    }
);



