const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.PORT || 3000;
var dummyData = require('./dummySchema.json');
const dbString =
  'mongodb+srv://harcon:TonyCantwell1@cluster0-wlbkj.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(dbString, {
  useUnifiedTopology: true,
})
  .then(client => {
    const db = client.db('neen-database');

    app.get('/', (req, res) =>
      res.send('This is the home route for Torquin, Habitats client API.'),
    );
    app.get('/organizations', (req, res) => {
      const organizationsColl = db.collection('organizations');
      organizationsColl.insertOne({
        name: 'EquiRatings',
        employees: 8,
        pricingTier: 3,
      });
      return res.json({organizations: ['EquiRatings', 'Habitat', 'DevKeep']});
    });
    app.get('/flows', (req, res) => {
      return res.json(dummyData.organizations['1233gfhf'].flows);
    });

    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`),
    );
  })
  .catch(err => console.log(err));
