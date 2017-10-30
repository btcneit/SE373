var Employee = require('../models/employee.model.js');

module.exports.home = function(req, res){
	if (req.method === 'POST') {

		req.checkBody('firstname', 'First Name is Required').notEmpty();
		req.checkBody('lastname', 'Last Name is Required').notEmpty();
		req.checkBody('department', 'Department is Required').notEmpty();
		req.checkBody('startdate', 'Start Date is Required').notEmpty();
		req.checkBody('jobtitle', 'Job Title is Required').notEmpty();
		req.checkBody('salary', 'Salary is Required').notEmpty();
		
		var errors = req.validationErrors();

		if(errors.length > 0){
			res.render('index', { 
	            title: 'Index',
	        	message : '',
	           	errors: errors,
	        }); 
		}else{
			var msg = new String();

			Employee.create({
				firstName: req.body.firstname,
				lastName: req.body.lastname,
				department: req.body.department,
				startDate: req.body.startdate,
				jobTitle: req.body.jobtitle,
				salary: req.body.salary
			}).then(function(){
				msg = 'Employee was Saved';
				return;
			}).catch(function(err){
				msg = 'Employee was not Saved';
				return err.message;
			}).then(function(err){
	            res.render('index', { 
	                title: 'Index',
	                message : msg,
	                error: err
	             });
			});
		}


	}else{
		res.render('index', { 
            title: 'Index',
	        message : '',
        }); 
	}
};

module.exports.view = function(req, res){
 
    function finish() {     
       Employee
       .find()
       .exec()
       .then(function(results){
            res.render('view', { 
                title: 'View',
                results : results
            });
       });
    }
    
    finish();   
};

module.exports.update = function(req, res){
    var id = req.params.id;
    var msg = new String();

    if (req.method === 'POST') {
         
        id = req.body._id;

        	Employee
    		.findOne({ '_id': id })
            .exec() 
            .then(function(reviewData) {

				reviewData.firstName = req.body.firstname;
				reviewData.lastName = req.body.lastname;
				reviewData.department = req.body.department;
				reviewData.startDate = req.body.startdate;
				reviewData.jobTitle = req.body.jobtitle;
				reviewData.salary = req.body.salary;
                return reviewData.save();
                                
            })
            .then(function(){
                msg = 'data has been updated';
            })
            .catch(function(){
                msg = 'data has NOT been updated';
            });
        
    }

    Employee
    .findOne({ '_id': id })
    .exec()
    .then(function(results){    
        res.render('update', { 
            title: 'Update',
            message: msg,
            results : results
        });
    })
    .catch(function(){
        res.render('error', { 
            message: 'Sorry ID not found'
        });
    });
}

module.exports.delete = function(req, res){
	var id = req.params.id;
    var msg = new String();

    function finish() {     
       Employee
       .find()
       .exec()
       .then(function(results){
            res.render('view', { 
                title: 'View',
                results : results
            });
       });
    }
    

     if ( id ) {        
        Employee
        .remove({ _id: id })
        .then(function(){            
            msg = `${id} has been removed`;
            finish();
        })
        .catch(function (err) {            
            msg = `${id} has not been removed`;
            finish(); 
        });                           
     } else {
      finish();
    }
}