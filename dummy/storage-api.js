const sleep = require("./sleep.js");
const Buffer = require("buffer").Buffer;
const crypto = require("crypto");

module.exports = class Storage {
  cache = {};

  pipe(stream) {
    return new Promise(async (resolve, reject) => {
      let data = "";
      stream.on("data", chunk => {
        data += Buffer.from(chunk, "utf-8");
      });
      stream.on("end", () => {
        const hash = crypto.createHash("md5").update(data).digest("hex");
        resolve(`http://localhost/dummy-example?${data.length}-${hash}`);
      });
    });
  }
};