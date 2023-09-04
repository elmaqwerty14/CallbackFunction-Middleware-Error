const express = require('express');
const app = express();


// Middleware untuk memeriksa header "Authorization"
const checkAuthorization = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token === 'token123') {
      next(); // Lanjutkan ke route '/private'
    } else {
      res.status(401).send('Akses ditolak.');
    }
  };
  
  // Route '/public'
  app.get('/public', (req, res) => {
    res.send('Ini adalah route publik.');
  });
  
  // Gunakan middleware 'checkAuthorization' untuk route '/private'
  app.get('/private', checkAuthorization, (req, res) => {
    res.send('Ini adalah route pribadi.');
  });
  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});