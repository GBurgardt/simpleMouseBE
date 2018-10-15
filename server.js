var express = require('express');
var app = express();

const robot = require("robotjs");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/mouse/move/:direction', function (req, res) {
    
    const mousePosi = robot.getMousePos();

    // Speed up the mouse.
    robot.setMouseDelay(2);

    const direction = req.params.direction;

    robot.moveMouse(
        mousePosi.x + (
            (direction === 'right') ? 15 :
            (direction === 'left') ? -15 :
            0 
        ),
        mousePosi.y + (

            (direction === 'down') ? 15 :
            (direction === 'up') ? -15 :
            0
        ),
    );

    res.send(mousePosi)
});

app.get('/mouse/click/:type', function (req, res) {

    const type = req.params.type;

    robot.mouseClick(type)

    res.send('ok')

})

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

