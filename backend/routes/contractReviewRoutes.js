const express = require('express');
const { createContractReview, getAllContractReviews } = require('../controller/contractReviewController');

const router = express.Router();

router.post('/contract-reviews', createContractReview);
router.get('/contract-reviews', getAllContractReviews);

module.exports = router;
