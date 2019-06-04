const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();


const PORT = 3001;

app.use(express.static('public/dist/'));

app.use(cors());
app.use(bodyParser.json());
// =========== GET Request ===================

app.get('/photos/:listingID', (req, res) => {
  const targetID = req.params.listingID;
  db.getPhotos(targetID, (err, photos) => {
    if (err) {
      res.status(500).send();
    } else {
      console.log(photos);
      res.status(200).send(photos);
    }
  });
});

// =========== POST ===============
app.post('/add-photos', (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  const { photo } = req.body;
  console.log(typeof photo, 'THIS IS THE TYPE');
  db.addPhoto(photo, id, (err, results) => {
    if (err) {
      console.log('ERROR IN THE ADDING', err);
    } else {
      console.log(results);
      res.status(200);
      res.end('YES');
    }
  });
});
// =========== UPDATE =============

// =========== Delete =============

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
