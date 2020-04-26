const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var dummyData = require('./dummySchema.json');

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/flows', (req, res) =>
  res.json(dummyData.organizations['1233gfhf'].flows),
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
