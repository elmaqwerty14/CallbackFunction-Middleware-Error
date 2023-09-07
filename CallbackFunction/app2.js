const express = require('express');
const app = express();

function prosescallback(data, callback) {
    console.log("Menerima data:", data);
    callback(data);
  }
  
  function callbackFunction(data) {
    console.log("Callback function dipanggil dengan data:", data);
  }
  
  const inputData = "Contoh Data";
  
  // Memanggil fungsi `processWithCallback` dengan callback function
  prosescallback(inputData, callbackFunction);

  
  app.listen(3002, () => {
    console.log('Server is running on port 3002');
});