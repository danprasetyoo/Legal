const express = require('express');
const { createContractReview, getAllContractReviews } = require('../controller/contractReviewController');

const router = express.Router();

router.post('/', createContractReview);
router.get('/', getAllContractReviews);

module.exports = router;
