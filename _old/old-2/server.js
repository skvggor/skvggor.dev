const express = require('express');
const site = express();
const port = process.env.PORT || 8080

site.use(express.static('public'));

site.set('view engine', 'ejs');
site.get('/', (request, response) => response.render('pages/index'));

site.listen(port);
