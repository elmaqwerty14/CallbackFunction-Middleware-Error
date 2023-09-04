const express = require('express');
const app = express();

// Middleware untuk mengatur response header
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

// Route '/success'
app.get('/success', (req, res) => {
  res.status(200).send('Operasi berhasil.');
});

// Route '/error'
app.get('/error', (req, res, next) => {
  // Membuat objek error
  const customError = new Error('Ini adalah contoh error sengaja dibuat.');
  customError.status = 500;

  // Melemparkan error ke middleware error handling
  next(customError);
});

// Middleware error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send('Terjadi kesalahan pada server.');
});

// Contoh lain menggunakan .then() dan .catch()
const someAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    // Simulasikan operasi asynchronous yang mungkin gagal
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve('Operasi berhasil.');
      } else {
        const error = new Error('Operasi gagal.');
        reject(error);
      }
    }, 1000);
  });
};

someAsyncFunction()
  .then((result) => {
    console.log(result); // Hasil jika sukses
  })
  .catch((error) => {
    console.error(error.message); // Pesan kesalahan jika gagal
  });

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
