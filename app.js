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
var lat_org = 121.4953565597534;
var lng_org = 25.012117536458376;

var move = seq_gen()/100;
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
    var sec = Math.round(d.getTime() / 1000) % 100;
    return sec;
}

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});