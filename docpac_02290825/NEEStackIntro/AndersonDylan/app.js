const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000, () => {console.log("Success yay")});
app.get('/', (req, res) => {
    res.send('Welcome to My App!!')
});
app.get('/greet', (req, res) => {
    let username = 'Guest';
    if (req.query.name) {
        username = req.query.name;
    }
    res.render('templatefile', { name: username });
});

