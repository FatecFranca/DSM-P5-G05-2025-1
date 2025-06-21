const express = require('express');
const router = express.Router();
const formController = require('../controllers/FormController');

/**
 * @swagger
 * /api/predict:
 *   post:
 *     summary: Realiza predição de diabetes e salva resultado no usuário
 *     tags: [Predição]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do usuário
 *               preg:
 *                 type: number
 *               plas:
 *                 type: number
 *               pres:
 *                 type: number
 *               skin:
 *                 type: number
 *               insu:
 *                 type: number
 *               mass:
 *                 type: number
 *               pedi:
 *                 type: number
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: Resultado da predição
 */

router.post('/form', formController.createFormEntry);
router.post('/predict', formController.predict);
router.get('/results', formController.getResults);

module.exports = router;
