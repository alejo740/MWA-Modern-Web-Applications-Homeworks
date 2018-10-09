const express = require('express');
const { MongoClient } = require('mongodb');
const crypto = require('crypto');

const app = express();
app.listen(3000, () => console.log('Running...'))
const dbName = `mwa`;
const dbUrl = `mongodb://127.0.0.1:27017/mwa`;

/* GET home page. */
app.get('/secret', function (req, res, next) {

  MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
    if (err) throw err;
    const db = client.db(dbName);
    db.collection('homework7').findOne({}, (err, doc) => {
      if (err) throw err;
      const encrypted = doc.message;
      const decipher = crypto.createDecipher('aes256', 'asaadsaad');
      let decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');

      res.status(200).json(decrypted);
      client.close();
    });
  });

});


app.get('/', function (req, res, next) {
  res.redirect('/secret');
});