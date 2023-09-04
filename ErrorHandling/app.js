const express = require('express');
const app = express ();

function fetchDataMiddleware(req, res, next) {
    setTimeout(function() {
        const data = 'ini adalah data yang diambil dari middleware';
        req.fetchedData = data;
        next();
    }, 1000)  
}
app.get('/', fetchDataMiddleware, (req, res) => {
    console.log('Data di route:', req.fetchedData);
    res.send('Data fetched and handled using middleware');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});