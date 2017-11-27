var Employee = require('../models/employee.model.js');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.readAll = function(req, res) {
        
    Employee
     .find()
     .exec()
     .then(function(results){
        sendJSONresponse(res, 200, results);
     })
     .catch(function(err){
        sendJSONresponse(res, 404, err);         
     });
    
};

module.exports.readOne = function(req, res) {
    
    if (req.params && req.params.employeeid) {
        Employee
        .findById(req.params.employeeid)
        .exec()
        .then(function(results){
            sendJSONresponse(res, 200, results);
        }).catch(function(err){
            sendJSONresponse(res, 404, {
                "message": "employeeid not found"
            });
        });

    } else {
        sendJSONresponse(res, 404, {
            "message": "employeeid not found"
        });
    }
};

module.exports.create = function(req, res) {

    Employee.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        department: req.body.department,
        startDate: req.body.startdate,
        jobTitle: req.body.jobtitle,
        salary: req.body.salary
    })
    .then(function(dataSaved){
        sendJSONresponse(res, 201, dataSaved);
    })
    .catch(function(err){ 
        sendJSONresponse(res, 400, err);
    });

};

module.exports.updateOne = function(req, res) {
    
  if ( !req.params.employeeid ) {
    sendJSONresponse(res, 404, {
        "message": "Not found, employeeid is required"
    });
    return;
  }
  
  Employee
    .findById(req.params.employeeid)
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
    .then(function(data){
        sendJSONresponse(res, 200, data);
    })
    .catch(function(err){
        sendJSONresponse(res, 400, err);
    });
        
};

module.exports.deleteOne = function(req, res) {
  if (!req.params.employeeid) {
    sendJSONresponse(res, 404, {
        "message": "Not found, employeeid is required"
    });
    return;
  }
  
  Employee
    .findByIdAndRemove(req.params.employeeid)
    .exec()
    .then(function(data){
        sendJSONresponse(res, 204, null);
    })
    .catch(function(err){
        sendJSONresponse(res, 404, err);
    });
    
};

