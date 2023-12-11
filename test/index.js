const { expect } = require('chai');
const { isUrl, isValidUrl } = require('../index');

describe('URL Validation Functions', () => {
    describe('isUrl function', () => {
        it('should return true for a valid URL', () => {
            const validUrl = 'https://example.com';
            const isValid = isUrl(validUrl);
            expect(isValid).to.be.true;
        });

        it('should return false for an invalid URL', () => {
            const invalidUrl = 'not_a_valid_url';
            const isValid = isUrl(invalidUrl);
            expect(isValid).to.be.false;
        });

        it('should return false for an empty string', () => {
            const emptyString = '';
            const isValid = isUrl(emptyString);
            expect(isValid).to.be.false;
        });
    });

    describe('isValidUrl function', () => {
        it('should return true for a URL with a successful response', (done) => {
            const validUrl = 'https://www.google.com';
            isValidUrl(validUrl, (err, isValid) => {
                expect(err).to.be.null;
                expect(isValid).to.be.true;
                done();
            });
        });

        it('should return false for a URL with an unsuccessful response', (done) => {
            const invalidUrl = 'https://www.google.com/not-found';
            isValidUrl(invalidUrl, (err, isValid) => {
                expect(err).to.be.null;
                expect(isValid).to.be.false;
                done();
            });
        });

        it('should handle error for an invalid URL', (done) => {
            const invalidUrl = 'http://invalidurl'; // intentionally invalid URL
            isValidUrl(invalidUrl, (err, isValid) => {
                // Ensure that err exists and is an instance of an error
                expect(err).to.exist;
                expect(err).to.be.an.instanceOf(Error);
    
                // Ensure that isValid is false due to the error
                expect(isValid).to.be.false;
    
                done(); // Invoke done to signal completion of the async test
            });
        });
    });
});
