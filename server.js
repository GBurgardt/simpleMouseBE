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
    res.render('index', {
        title: 'Hey',
        message: 'Helasjdo'
    })
});

app.get('/mouse/move/:deltaX/:deltaY', function (req, res) {
    
    const mousePosi = robot.getMousePos();

    // Speed up the mouse.
    // robot.setMouseDelay(1);

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


app.set('views', `${__dirname}/views`);

app.set('view engine', 'pug');

console.log(__dirname);

// require('./build/' + cmd + '.js')
// path.join(__dirname, 'views/' + viewName)

app.listen(3000, function () {

    console.log('Andando')


});



