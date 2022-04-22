const express = require('express');
const router = express.Router();

router.get('/teste', (req, res) => {
    res.send('pedro');
})

module.exports = router;