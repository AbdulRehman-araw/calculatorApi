const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
app.use(cors()); // Enable all CORS requests
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    default:
      return res.status(400).send('Invalid operation');
  }

  res.json({ result });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
