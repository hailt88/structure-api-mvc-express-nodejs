const express = require('express');
const router = express.Router();
const timestamp = Date.now();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok add more info there',
	time: timestamp
    })
})

module.exports = router;
