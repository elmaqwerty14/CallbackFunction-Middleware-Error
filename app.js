const express = require('express');
const app = express();


// membuat function fetchingdata untuk mengambil data
function fetchData(callback){
    setTimeout(function(){
        const data = 'ini adalah data yang diambil';
        callback(data);
    }, 1000);
}

// membuat function handledata untuk menampilkan data yang diterima jika data sudah siap
function handleData(data) {
    console.log('Data yang diterima:', data);
}

app.get('/', (req, res) => {
    fetchData(handleData);
    res.send('Fetching data...');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});