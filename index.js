var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port',1295);

app.get('/',function(req,res){
  res.render('home');
});

app.get('/getting-started', function(req,res){
  res.render('getting-started');
})

app.get('/making-calls', function(req,res){
  res.render('making-calls');
})

app.get('/response', function(req,res){
  res.render('response');
})

app.get('/full-example', function(req,res){
  res.render('full-example');
})
//404 Page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

//500 Page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'),function(){
  console.log("App is running...");
});
