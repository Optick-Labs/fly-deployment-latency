 
const express = require('express');
const app = express();
const port = 3000; // Port where the server will listen

app.use((req, res, next) => {
  setTimeout(() => { // Set a delay of 100ms
    next(); // Proceed to the next middleware/function
  }, 100);
});

app.use((req, res) => {
  res.send('OK'); // Respond with "OK" to every request
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
