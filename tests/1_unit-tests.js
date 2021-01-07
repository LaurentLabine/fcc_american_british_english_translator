const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    suite('Translate to british English', function() {
    
        test('Mangoes are my favorite fruit.', function(done) {
          let text = 'Mangoes are my favorite fruit.';
          let locale = 'american-to-british'
          assert.equal(Translator.translate(text,locale),{"text":"Mangoes are my favorite fruit.","translation":"Mangoes are my <span class=\"highlight\">favourite</span> fruit."});
          done();
        });
        
        test('Decimal Input', function(done) {
          let input = '1.5L';
          assert.equal(convertHandler.getNum(input),1.5);
          done();
        });
        
        test('Fractional Input', function(done) {
          let input = '2/5L';
          assert.equal(convertHandler.getNum(input),0.4);
          done();
        });
        
        test('Fractional Input w/ Decimal', function(done) {
          let input = '1.1/2L';
          assert.equal(convertHandler.getNum(input),0.55);
          done();
        });
        
        test('Invalid Input (double fraction)', function(done) {
          let input = '1//2kg';
          assert.equal(convertHandler.getNum(input),'invalid number');
          done();
        });
        
        test('No Numerical Input', function(done) {
          let input = 'L';
          assert.equal(convertHandler.getNum(input),1);
          assert.equal(convertHandler.getUnit(input),'L')
          done();
        }); 

});
