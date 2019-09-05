const express = require('express');
const app = express();
const rp = require('request-promise');
const $ = require('cheerio');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
    let url = req.body.url;
    rp(url)
        .then(html => {
            res.set('Content-Type','text/html');
            res.send($('.readme', html).html());
        })
})

app.listen(3000, () => console.log("Server listening...\nHead to http://localhost:3000"));
