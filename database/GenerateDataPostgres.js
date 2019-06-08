const fs = require('fs');
const faker = require('faker');
const wStream = fs.createWriteStream('./postgres.csv');

const working = 'this is working';

wStream.write(working, (err) => {
  if (err) throw err;
  console.log('SUCCES');
});
