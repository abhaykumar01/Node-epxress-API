var express = require('express');
var bodyparser = require('body-parser');
var faker = require('faker');
var app = express();

// BASE setup
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//setting our port
var port = process.env.PORT || 8081;



// ROUTES FOR OUR API   
var routes = express.Router();
// test route to make sure everything is working (accessed at GET http://localhost:8081/api)
app.get('/', function(req, res) {
    res.json({message : 'Welcome to express API'})
}); 

app.get('/users', function(req, res) {
    var data = [];
    for ( var i=0; i<10; i++){
        data.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        })
    }    
      res.status(200).send(data); 
}); 

// more routes for our API will happen here


// START THE SERVER
app.listen(port);
console.log("listeaning to port " + port);
