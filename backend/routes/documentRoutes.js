const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
    res.json([]);
});

router.post('/', upload.single('file'), async (req, res) => {
    res.status(201).json({ message: 'Dokumen berhasil diunggah' });
});

module.exports = router;
