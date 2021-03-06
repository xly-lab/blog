require('dotenv').config({ path: '../../.env.local' });
const jwt = require('jsonwebtoken');
const ms = require('ms');

const sign = (user) => {
  return new Promise((resolve, reject) => {
    if (typeof user === 'object' && user !== null) {
      jwt.sign(user, process.env.JWT_SECRET, { expiresIn: ms('2 days') / 1000 }, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    } else {
      reject(new Error('params is not object'));
    }
  });
};

const decode = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        reject(err);
      } else {
        resolve(decode);
      }
    });
  });
};

module.exports = {
  sign,
  decode,
};
