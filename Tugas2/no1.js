const express = require ('express');
const app = express();

function fetchData(callback) {
    setTimeout(function() {
        const data = 'Elma Kiu';
        callback(data);
        
    }, 1000);
    
}

function handleData(data) {
    fetchData(handleData)
    console.log('Halo,', data,'! Selamat Datang di Aplikasi Kami');  
}

app.get('/', (req, res) => {
    fetchData(handleData)
    res.send('Fetching data...');
});

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});