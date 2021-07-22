// A simple in-memory cache for storing strings
const sleep = require("./sleep.js");

module.exports = class Translation {
  data = {
    "Hello World!": "¡Hola mundo!",
    "Who are you?": "¿Quién eres?",
    "Recognize the symptoms of COVID-19": "Reconocer los síntomas del COVID-19",
    "People 33-64 years of age": "Personas de 33 a 64 años",
    "Postponement of booster vaccination periods": "Aplazamiento de los períodos de vacunación de refuerzo",
    "Vaccination certificate": "Certificado de vacunacion"
  };

  translate(source) {
    return new Promise(async (resolve, reject) => {
      if (typeof source !== "string") {
        reject("Translation source must be a string");
      }
      if (typeof this.data[source] !== "string") {
        console.warn(`Missing translation for "${source}", returning the original as a fallback.`);
        resolve(source);
      } else {
        await sleep((source.length * 20) + Math.ceil((Math.random() * 400)));
        resolve(this.data[source]);
      }
    });
  }
};