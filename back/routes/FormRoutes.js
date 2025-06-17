const express = require('express');
const router = express.Router();
const formController = require('../controllers/FormController');

router.post('/form', formController.createFormEntry);
router.post('/predict', formController.predict);
router.get('/results', formController.getResults);

module.exports = router;
