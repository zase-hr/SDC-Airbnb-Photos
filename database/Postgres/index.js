const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'zacharypierce',
  host: 'localhost',
  database: 'photos',
  password: '',
  port: 5432,
});

// ========== GET ===========
const getPhotos = (targetId, res) => {
  pool.query(`SELECT * FROM photos WHERE listing=${targetId}`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};
const getListingInfo = (targetId, res) => {
  pool.query(`SELECT * FROM listings WHERE id=${targetId}`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};
  // ========== INSERT ============
const insertPhoto = (listing, id, photo, res) => {
  pool.query(`INSERT INTO photos (id,url,description,is_verified,listing) VALUES (${id},'${photo.url}','${photo.desc}',${photo.isVerified},${listing})`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Added');
    }
  });
};
  // ========== DELETE =============
const deletePhoto = (photoId, res) => {
  pool.query(`DELETE FROM photos WHERE id=${photoId}`, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Deleted');
    }
  });
};
  // ========= UPDATE ===========
const updatePhoto = (photoId, updatedPhoto, res) => {
  pool.query(`UPDATE photos SET description = '${updatedPhoto.desc}' WHERE id = ${photoId}`, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send(err);
    } else {
      res.status(200).send('Updated');
    }
  });
};
module.exports = {
  getPhotos,
  getListingInfo,
  insertPhoto,
  deletePhoto,
  updatePhoto,
};
