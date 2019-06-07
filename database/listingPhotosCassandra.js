const faker = require('faker');

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const sentences = [];
const photoUrls = [];
const verified = [true, false];

for (let j = 0; j < 15; j += 1) {
  sentences.push(faker.lorem.sentence());
  photoUrls.push(faker.image.image(720, 480, 'cats'));
}

const cassandraListingPhotos = () => {
  const photosArray = [];
  const usedPhotos = [];

  // Generate 5-15 photos per listing.
  const numberOfPhotos = getRandomInt(5, 8);
  let counter = 0;

  // Add an arbitrary # of photo objects to an array.
  for (let i = 0; i <= numberOfPhotos; i += 1) {
    const currentPhoto = faker.image.image(720, 480, 'cats');
    // If the randomPhoto has not been used yet, create the photo object with that index.
    if (photosArray.length !== numberOfPhotos) {
      const photoObj = {
        id: counter,
        url: photoUrls[Math.floor(Math.random() * photoUrls.length)],
        desc: sentences[Math.floor(Math.random() * sentences.length)],
        isVerified: verified[Math.floor(Math.random() * verified.length)],
      };
      photosArray.push(photoObj);
      usedPhotos.push(currentPhoto);
      counter += 1;
    }
  }
  return photosArray;
};

module.exports = cassandraListingPhotos;
