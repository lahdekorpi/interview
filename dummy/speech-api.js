const sleep = require("./sleep.js");
const Buffer = require("buffer").Buffer;
const stream = require("stream");

module.exports = class Speech {
  cache = {};

  speak(text) {
    return new Promise(async (resolve, reject) => {
      if (typeof text !== "string") {
        reject("Speech text must be a string");
      }
      await sleep((text * 20) + Math.ceil((Math.random() * 400)));
      const fakeStream = new stream.PassThrough();
      setTimeout(() => {
        fakeStream.write(Buffer.from("this is from the first timeout", "utf-8"));
      }, 500);
      setTimeout(() => {
        fakeStream.write(Buffer.from("this is from the second timeout", "utf-8"));
        fakeStream.end();
      }, 1000);
      resolve(fakeStream);
    });
  }
};