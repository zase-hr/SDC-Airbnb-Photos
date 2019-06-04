const faker = require('faker');

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const generateListingPhotos = () => {
  const photosArray = [];
  const usedPhotos = [];

  // Generate 5-15 photos per listing.
  const numberOfPhotos = 15;

  // Add an arbitrary # of photo objects to an array.
  for (let i = 0; i <= numberOfPhotos; i += 1) {
    const currentPhoto = faker.image.image(720, 480, 'cats');
    // If the randomPhoto has not been used yet, create the photo object with that index.
    if (photosArray.length !== numberOfPhotos) {
      const photoObj = {
        url: currentPhoto,
        desc: faker.lorem.sentence(),
        isVerified: faker.random.boolean(),
      };
      photosArray.push(photoObj);
      usedPhotos.push(currentPhoto);
    }
  }
  return photosArray;
};

module.exports = generateListingPhotos;
