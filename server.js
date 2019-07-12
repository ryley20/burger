var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./controllers/burgers_controller.js');

// Express set up
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



var PORT = process.env.PORT ||8080;

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
})