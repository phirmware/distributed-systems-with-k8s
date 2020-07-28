const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    request.get('http://localhost:8080', function (error, response, body) {
        if (error) {
            return res.json(error);
        }
        res.json(JSON.parse(body));
    });
});

app.listen(3000, () => {console.log('Listening on port' + 3000)});