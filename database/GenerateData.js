const fs = require('fs');
const faker = require('faker');
const generateListingPhotos = require('./listingPhotosCassandra');
// ================= FS Writable Stream Attempt =========
const wStream = fs.createWriteStream('./test.csv');

let listingCount = 0;
let userId = 0;
const start = new Date().getTime();
const sentences = [];
const boolean = [true, false];
const locations = [];
const names = [];
const n = 1;

for (let j = 0; j < 10; j += 1) {
  const sentence = faker.lorem.sentences(3, 3);
  const listingLocation = faker.address.city();
  const name = faker.name.findName();
  sentences.push(sentence);
  locations.push(listingLocation);
  names.push(name);
}

for (let i = 0; i <= n; i += 1) {
  const photo = {
    id: listingCount,
    description: sentences[Math.floor(Math.random() * sentences.length)],
    is_saved: boolean[Math.floor(Math.random() * boolean.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    user_id: userId,
    username: names[[Math.floor(Math.random() * names.length)]],
    photos: generateListingPhotos(),
  };

  const values = `${photo.id}| ${photo.description}| ${photo.is_saved}| {${JSON.stringify(photo.photos)}}| ${photo.user_id}| ${photo.username}|`;
  const test = 'listing_id| description| is_saved| photos| location| user_id| username';
  const otherTest = values;
  listingCount += 1;
  userId += 3;
  if (i === 0) {
    wStream.write(`${test}\n`, (err) => {
      if (err) throw err;
      if (i % 10000) {
        const end = new Date().getTime();
        const total = end - start;
        console.log('Data Written in ', total);
      }
    });
  }
  if (i === n) {
    wStream.write(`${otherTest}\n`, (err) => {
      if (err) throw err;
      if (i % 10000) {
        const end = new Date().getTime();
        const total = end - start;
        console.log('Data Written in ', total);
      }
    });
  } else {
    wStream.write(`${otherTest},\n`, (err) => {
      if (err) throw err;
      if (i % 10000) {
        const end = new Date().getTime();
        const total = end - start;
        console.log('Data Written in ', total);
      }
    });
  }
}
