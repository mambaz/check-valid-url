'use strict';

const http = require('http');
const https = require('https');

const urlRegex = /^(http[s]?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}\.?/;

function isStringValidUrl(text) {
   return urlRegex.test(text);
}

function isValidUrl(url, callback) {
   const client = url.startsWith('https') ? https : http;
   client.get(url, (res) => {
       const { statusCode } = res;
       const isSuccessCode = statusCode >= 200 && statusCode < 400; // Successful status codes: 2xx or 3xx
       callback(null, isSuccessCode);
   }).on('error', (err) => {
       callback(err, false);
   });
}

module.exports.isUrl = isStringValidUrl;
module.exports.isValidUrl = isValidUrl;
