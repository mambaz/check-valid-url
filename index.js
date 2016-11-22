'use strict';

var urlRex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

/**
 * whether a string is in URL 
 * @param   {string}        parameter to check the string
 * @returns {boolean}       true|false
 */
module.exports.isUrl = function (txt) {
   return urlRex.test(txt);
}
