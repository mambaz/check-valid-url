# URL Validator Kit

A Node.js module to check whether a string is a valid URL.

## Installation

Install the package via npm:

```bash
npm install check-valid-url --save
```

## Usage

Import the module into your project:

```js

const { isUrl } = require('check-valid-url');

const url = 'https://www.example.com';
const isValidUrl = isUrl(url);

if (isValidUrl) {
  console.log('Valid URL');
} else {
  console.log('Not a valid URL');
}

```
The `isUrl` function returns `true` if the provided string is a valid URL; otherwise, it returns `false`.

## API
1. `isUrl(text)`
Checks whether the provided string `text` is a valid URL.

    - `text`: The string to be checked.

    Returns `true` if `text` is a valid URL; otherwise, returns `false`.

2. `isValidUrl(url, callback)`:

    - `url` (string): The URL to validate.

    - `callback` (Function): A callback function to handle the result. Parameters:
      - `err` (Error | null): An error object if an error occurs; otherwise, null.
      - `isValid` (boolean | undefined): true if the URL responds with a successful status code; false or undefined in case of an error.


## Example

`isUrl`: Check if a string is a valid URL.

```js

const { isUrl } = require('check-valid-url');

const url = 'https://www.example.com';
const isValidUrl = isUrl(url);

console.log(isValidUrl); // Output: true

```

`isValidUrl`: Check if a URL responds with a successful status code (2xx or 3xx).

```js

const { isValidUrl } = require('check-valid-url');

const url = 'https://www.example.com';
isValidUrl(url, (err, isValid) => {
    if (err) {
        console.error(err); // Handle error
    } else {
        console.log(isValid); // Output: true or false
    }
});

```


## Testing

To run the tests, use:

```bash
npm test
```
