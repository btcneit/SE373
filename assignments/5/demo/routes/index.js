var express = require('express');
var router = express.Router();
var ctrlEmployee = require('../controllers/employee.controller.js');

router.get('/employees', ctrlEmployee.readAll);
router.get('/employees/:employeeid', ctrlEmployee.readOne);
router.post('/employees', ctrlEmployee.create);
router.put('/employees/:employeeid', ctrlEmployee.updateOne);
router.delete('/employees/:employeeid', ctrlEmployee.deleteOne);

module.exports = router;
