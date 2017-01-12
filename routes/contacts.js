// routes/contacts.js

var express = require('express');
var router = express.Router();
var Contact = require('../models/Contact');

// Contacts - Index
router.get('/', function(req, res){
  Contact.find({}).sort({class:1, name:1}).exec(function(err, contacts){
    if(err) return res.json(err);
    res.render('contacts/index', {contacts:contacts});
  });
});

// Contacts - search
router.get('/search',function(req, res){

  var search_word = req.param('searchWord');
  var search_class = req.param('searchClass');
  var search_option = req.param('searchOption');
  var searchCondition = {$regex:search_word};
  console.log(search_word+"  "+search_class+"  "+search_option);
  if(search_class == "0"){
    if(search_option == "all"){
      Contact.find({$or:[{name:searchCondition},{school:searchCondition},
        {church:searchCondition}]}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }else if(search_option == "name"){
      Contact.find({name:searchCondition}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }else if(search_option == "school"){
      Contact.find({school:searchCondition}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }else if(search_option == "church"){
      Contact.find({church:searchCondition}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }
  }else{
    if(search_option == "all"){
      Contact.find({class:search_class, $or:[{name:searchCondition},{school:searchCondition},
        {church:searchCondition}]}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }else if(search_option == "name"){
      Contact.find({class:search_class, name:searchCondition}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }else if(search_option == "school"){
      Contact.find({class:search_class, school:searchCondition}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }else if(search_option == "church"){
      Contact.find({class:search_class, church:searchCondition}).sort({class:1,name:1}).exec(function(err, searchContents){
          if(err) return res.json(err);
          res.render('contacts/index',{contacts:searchContents});
        });
    }
  }



    //res.render('contacts/empty')
});

// Contacts - show
router.get('/:id', function(req, res){
  Contact.findOne({_id:req.params.id}, function(err, contact){
    if(err) return res.json(err);
    res.render('contacts/show', {contact:contact});
  });
});



module.exports = router;
