const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const path = require('path');

//Rest API route
router.use('/api/books', bookRoutes);

//React App in case no API called
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
module.exports = router;