const express = require('express');
const app = express();


// membuat function fetchingdata untuk mengambil data
function fetchData(callback){
    // "setTimeout", digunakan untuk memanggil fungsi atau mengevaluasi expresi setelah periode waktu yang telah diberikan (dalam satuan milidetik).
    setTimeout(function(){
        const data = 'ini adalah data yang diambil';
        callback(data);
    }, 1000); // fungsi callback disini tidak memiliki nama dikenal dengan istilah "Anonymous Function" dan akan dipanggil setelah 1 detik dilewati. (1 detik = 1000 milidetik)
}

// membuat function handledata untuk menampilkan data yang diterima jika data sudah siap
function handleData(data) {
    console.log('Data yang diterima:', data);
}

app.get('/', (req, res) => {
    fetchData(handleData);
    res.send('Fetching data...');
});

app.listen(3003, () => {
    console.log('Server is running on port 3003');
});