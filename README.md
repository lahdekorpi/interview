## Available functions:

The goal of this test is to create a working code against 4 simple fake APIs. We are simulating two requests coming from users (two arrays of strings).  
You have to do the following for each string:
1. Translate the source language using `translation.translate()` (Or fetch the same data from cache if available / store in cache if not).
2. Get a binary (a fake MP3) for a TTS speech for the translated text using `speech.speak()` (Or fetch an existing URL from cache if available / store in cache if not).
3. Store the binary data into storage and get a URL for said data using `storage.pipe()`.
4. Respond to the user by calling `respond()` for each request with the data in the following format:

```js
 const response = {
   translations: [], // Add all the translated strings to this array in the same order as they came in
   speech: [] // Add all the speech URLs to this array in the same order as the translations
 }
```

Each fake API respons with a Promise and simulates the real world by taking some time to respond.

### Cache
```js
cache.getItem("someKeyHere"); // Returns a promise that resolves to a string if found or undefined if not.
cache.setItem("someKeyHere", "someDataHere"); // Returns a promise that resolves after the cache has been stored.
```

### Translation
```js
translation.translate("English Source Text"); // Returns a promise that resolves to a string containing the translation as a string.
```

### Speech
```js
speech.speak("Texto fuente en español"); // Returns a promise that resolves to a readable stream that will stream binary data (async).
```

### Storage
```js
storage.pipe(stream); // Returns a promise that resolves to a fake URL once the stream has ended. A unique URL for each source text will be provided.
```