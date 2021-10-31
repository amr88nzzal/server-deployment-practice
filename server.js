'use strict';
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const stamper = require('./middleware/stamper');
const err404 = require('./handlers/404');
const err500 = require('./handlers/500');


app.get('/', (req, res) => {
    res.status(200).send('The server is LIVE');
})


app.get('/bad', (req, res, next) => {
    next('You made an Error 🛑❗');
});


app.get('/data', stamper, (req, res) => {
    let resObj = {
        time: req.timestamp,
        ip: req.ip,
        body: req.body || null,
        route: req.route,
    }
    res.status(200).json(resObj)

})

app.use('*', err404);

app.use(err500);


function start() {
    app.listen(port, () => {
        console.log(`Server is on port : ${port}`);
    })
}
module.exports = { app, start }