// A simple in-memory cache for storing strings
const sleep = require("./sleep.js");

module.exports = class Cache {
  cache = {};

  setItem(key, value) {
    return new Promise(async (resolve, reject) => {
      if (typeof key !== "string") {
        reject("Cache item key must be a string");
      }
      if (typeof value !== "string") {
        reject("Cache item value must be a string");
      }
      await sleep((key.length * 20) + Math.ceil((Math.random() * 400)));
      resolve(this.cache[key] = value);
    });
  }
  getItem(key) {
    return new Promise(async (resolve, reject) => {
      if (typeof key !== "string") {
        reject("Cache item key must be a string");
      }
      await sleep((key.length * 20) + Math.ceil((Math.random() * 400)));
      resolve(this.cache[key]);
    });
  }
};