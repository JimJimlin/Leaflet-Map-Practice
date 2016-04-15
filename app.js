var express = require('express');
var app = express();
var path = require('path');
var GeoJSON = require('geojson');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    // res.send('Hello World!');
    res.render('index');
});

app.get('/pathgen', function (req, res) {
var lat_org = 121.5577727821931;
var lng_org = 25.04028063064491;

var move = seq_gen()/10000;
// console.log(move);

var lat = lat_org + move;
var lng = lng_org + move;

var data_array = [{
    name: 'Location A',
    x: lng + move,
    y: lat
}];

var geojson = GeoJSON.parse(data_array, { 'Point': ['x', 'y'] });

res.send(JSON.stringify(geojson));

function seq_gen() {
    var d = new Date();
    var sec = Math.round(d.getTime() / 1000) % 1000;
    return sec;
}

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});