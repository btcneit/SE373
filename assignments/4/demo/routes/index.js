var express = require('express');
var router = express.Router();
var ctrlEmployee = require('../controllers/employee.controller.js');
/* GET home page. */
router.all('/', ctrlEmployee.home);
router.all('/view', ctrlEmployee.view);
router.all('/update/:id?', ctrlEmployee.update);
router.all('/delete/:id?', ctrlEmployee.delete);

module.exports = router;
