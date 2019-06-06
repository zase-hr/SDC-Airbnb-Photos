const fs = require('fs');
const faker = require('faker');

let data = [];
let count = 0;

const dataGen = () => {
  for (let i = 0; i < 10; i += 1) {
    let photo = {
      hello: 'hello world',
    };
    data.push(photo);
  }
  const json = JSON.stringify(data);
  fs.writeFile('./data.json', json, (err) => {
    if (err) {
      console.log('THIS IS AN ERROR!!!');
    } else {
      console.log('SUCCESS!!!');
    }
  });
  console.log('done');
};

dataGen();
