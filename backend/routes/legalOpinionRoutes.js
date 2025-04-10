const express = require('express');
const { createLegalOpinion, getAllLegalOpinions } = require('../controller/legalOpinionController');

const router = express.Router();

router.post('/legal-opinions', createLegalOpinion);
router.get('/legal-opinions', getAllLegalOpinions);

module.exports = router;
