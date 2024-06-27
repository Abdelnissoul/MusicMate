const express = require('express');
const router = express.Router();

// this is for testing
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Playlist routes working!' });
});

module.exports = router;
