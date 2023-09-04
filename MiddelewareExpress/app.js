const express = require('express');
const app = express();

// Middleware function for fetching data
function fetchDataMiddleware(req, res, next) {
    setTimeout(function() {
        const data = 'ini adalah data yang diambil dari middleware';
        req.fetchedData = data; //Menyimpan data dalam objek request
        next(); // Melanjutkan ke middleware atau penangan permintaan berikutnya 
        
    }, 1000);  
}

// Rute yang menggunakan middleware dan menangani data
app.get('/', fetchDataMiddleware, (req, res) => {
    console.log('Data di route:', req.fetchedData);
    res.send('Data fetched and handled using middleware');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});