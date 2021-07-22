## Available functions:

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