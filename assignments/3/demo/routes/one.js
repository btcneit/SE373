var express = require('express');
var router = express.Router();

/*Assignment 3-1*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('one', { title: 'One' });
}).post('/', function(req, res, next) {
   if (req.method === 'POST' 
   	&& req.body.val.length) {
        next();
    } else {
       res.render('one', { title: 'One', error: "Invalid Input"});
    }   
}).post('/', function(req, res, next) {
   if (req.method === 'POST' 
   	&& req.body.val.length) {
       res.render('one', { 
            title : 'One',
            val: req.body.val,
        });   
        
    } else {
        res.redirect('/');
    }   
});

module.exports = router;
