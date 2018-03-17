// Environment variables
var express = require('express'),
    app = express(),
    path = require('path');
// var config = require('../../webpack.config.js');
// var webpack = require('webpack');
//
//
// var compiler = webpack(config);
//
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
app.use(express.static(__dirname +'./../../build'));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.listen(process.env.PORT||3000, function(){
    console.log("Server has started!");
})