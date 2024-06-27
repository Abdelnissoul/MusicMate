const express = require('express');
const router = express.Router();

// Example route to get recommendations
router.get('/', (req, res) => {
  res.send('Recommendation route');
});

module.exports = router;
