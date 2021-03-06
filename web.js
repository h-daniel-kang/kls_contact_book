var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var uri='mongodb://k.hoon:raulg7@ds149207.mlab.com:49207/contect_book';

//DB setting
mongoose.connect('mongodb://k.hoon:raulg7@ds149207.mlab.com:49207/contect_book');
var db = mongoose.connection;


db.once('open', function(){
  console.log('DB connected');
});

db.on('error',function(err){
  console.log('DB ERROR : ', err);
});

//Other setting
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Routes
app.use('/', require('/home/hosting_users/jjbusd/apps/jjbusd_klscontactbook/routes/home'));
app.use('/contacts', require('/home/hosting_users/jjbusd/apps/jjbusd_klscontactbook/routes/contacts'));

// Port setting
app.listen(8001, function(){
  console.log('server on!');
});
