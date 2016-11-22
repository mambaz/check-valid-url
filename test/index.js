'use strict';

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    $ = require('../index.js'),
    validUrls = [
        'http://www.google.com/',
        'http://www.google.com',
        'http://google.com'
    ],
    invalidUrls = [
        'http:www.google.com',
        'http:/www.google.com'
    ];



describe('##### Check URL #####', function() {

    it ('valid url', function () {

        validUrls.forEach (function (url) {

            var result = $.isUrl(url);
            result.should.be.true;
        });
    });

    it ('invalid url', function () {

        invalidUrls.forEach (function (url) {

            var result = $.isUrl(url);
            result.should.be.false;
        });
    });

});
