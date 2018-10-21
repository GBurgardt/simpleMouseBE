var express = require('express');
var app = express();


const robot = require("robotjs");

//////////////////////////////////////
////////// Configuraciones ///////////
//////////////////////////////////////

const cors = require('cors')
app.use(cors());

//////////////////////////////////////
//////// Fin Configuraciones /////////
//////////////////////////////////////

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/mouse/move/:deltaX/:deltaY', function (req, res) {
    
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

app.get('/mouse/click/:type', function (req, res) {
    const type = req.params.type;
    robot.mouseClick(type)
    res.send('ok')
})

app.get('/mouse/scroll/:deltaX/:deltaY', function (req, res) {
    
    const deltaX = Number(req.params.deltaX);
    const deltaY = Number(req.params.deltaY);

    robot.scrollMouse(0, deltaY)

    // setTimeout(() => {
    //     robot.scrollMouse(0, 50)
    // }, 200)

    res.send('ok')
})


//////////////////////////////////////
/////////// Inicialización ///////////
//////////////////////////////////////



app.listen(
    5000, 
    () => {
        console.log('Listening on port 5000!');
    }
);



