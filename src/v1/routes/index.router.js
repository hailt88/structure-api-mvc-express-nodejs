const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
	const timestamp = Date.now();
    res.status(200).json({
        status: 'success',
        message: 'api ok add more info there',
	request_time: timestamp
    })
})

module.exports = router;
