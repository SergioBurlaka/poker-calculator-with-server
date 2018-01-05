



var calculationService = require('./serverside-calculation/calculation-service.js');


const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 3003;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));



app.use(express.static(__dirname + '/app'));


app.set('view engine', 'html');



app.get('/',function(req,res){
    res.sendFile(__dirname + '/app/' + 'index.html');
});


app.post('/', function (req, res) {


    // console.log(req.body);

    var flop = req.body.flop;
    var turn = req.body.turn;
    var river = req.body.river;
    var excluded = req.body.excluded;
    var players = req.body.players;

    var resultOfCalcilation = calculationService.sayHelloFromService(flop, turn, river, excluded, players);
    // console.log(resultOfCalcilation);


    var obj = {};
    obj.title = 'server side';
    obj.data = resultOfCalcilation;

    res.send(obj);

    }

);




app.listen(port, function () {
    console.log('app running')
});



