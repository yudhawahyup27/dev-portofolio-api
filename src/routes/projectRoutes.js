
const express = require('express');

const { 
    getAllProject,

} = require ('../controllers/projectControllers.js')

const router = express.Router();

router.route('/project')
    .get(getAllProject);
module.exports = router;