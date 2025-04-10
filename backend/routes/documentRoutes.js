const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
    // Logika untuk mendapatkan daftar dokumen
    res.json([]);
});

router.post('/', upload.single('file'), async (req, res) => {
    // Logika untuk mengunggah dokumen
    res.status(201).json({ message: 'Dokumen berhasil diunggah' });
});

module.exports = router;
