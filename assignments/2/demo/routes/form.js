var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var msg = '';
    if (req.query.empty === 'true') {
        msg = 'Please enter a value';
    }
  res.render('form', { title: 'Form' });
}).post('/', function(req, res, next) {
   if (req.method === 'POST' 
   	&& req.body.name.length
   	&& req.body.email.length) {
       
        next();
        
    } else {
       res.render('form', { title: 'Form'});
    }   
}).post('/', function(req, res, next) {
   if (req.method === 'POST' 
   	&& req.body.name.length
   	&& req.body.email.length) {
       res.render('results', { 
            title : 'Results',
            name: req.body.name,
            email: req.body.email,
            comments: req.body.comments
        });   
        
    } else {
        res.redirect('/');
      
    }   
});

module.exports = router;
