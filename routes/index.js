const express = require('express');
const router = express.Router();

const path = require('path');

router.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname + '/client', "dist", "index.html"))
);

router.get('/favicon.ico', (req, res) => res.sendStatus(204));

module.exports = router;
