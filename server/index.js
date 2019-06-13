const newRelic = require('newrelic');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const PostDB = require('../database/Postgres/index.js');

const app = express();


const PORT = 3001;

app.use(express.static('public/dist/'));

app.use(cors());
app.use(bodyParser.json());
// =========== GET =============

app.get('/photoListing/:listingID', (req, res) => {
  const targetID = req.params.listingID;
  PostDB.getListingInfo(targetID, res);
});
app.get('/photos/:listingID', (req, res) => {
  const targetID = req.params.listingID;
  PostDB.getPhotos(targetID, res);
});

// =========== POST ===============

app.post('/add-photos', (req, res) => {
  const { listing } = req.body;
  const { id } = req.body;
  const { photo } = req.body;
  PostDB.insertPhoto(listing, id, photo, res);
});
// =========== UPDATE =============
app.put('/update-photo', (req, res) => {
  const { id } = req.body;
  const { photo } = req.body;
  PostDB.updatePhoto(id, photo, res);
});

// =========== Delete =============
app.delete('/delete-photo', (req, res) => {
  console.log(req.body.id);
  const { id } = req.body;
  PostDB.deletePhoto(id, res);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
