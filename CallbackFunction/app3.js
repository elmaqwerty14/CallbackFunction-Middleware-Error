const express = require('express');
const app = express();
function customCallback(req, res) {
    // Your custom logic here
    // You can access the request object (req) and send a response (res)
    res.send(`This is a custom callback!`);
  }
  
  app.get('/callback', customCallback);

  app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
  