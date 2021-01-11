const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {

    suite('Translate to british English', function() {
    
        test('Mangoes are my favorite fruit.', function(done) {
          let text = 'Mangoes are my favorite fruit.';
          let locale = 'american-to-british'
          let res = translator.translate(text, locale)
          assert.equal(res.text,'Mangoes are my favorite fruit.')
          assert.equal(res.translation,'Mangoes are my <span class="highlight">favourite</span> fruit.')
          done();
        });
        
        test('I ate yogurt for breakfast.', function(done) {
            let text = 'I ate yogurt for breakfast.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'I ate yogurt for breakfast.')
            assert.equal(res.translation,'I ate <span class=\"highlight\">yoghurt</span> for breakfast.')
            done();
        });
        
        test('We had a party at my friend\'s condo.', function(done) {
            let text = 'We had a party at my friend\'s condo.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'We had a party at my friend\'s condo.')
            assert.equal(res.translation,'We had a party at my friend\'s <span class=\"highlight\">flat</span>.')
            done();
        });
        
        test('Can you toss this in the trashcan for me?', function(done) {
            let text = 'Can you toss this in the trashcan for me?';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Can you toss this in the trashcan for me?')
            assert.equal(res.translation,'Can you toss this in the <span class=\"highlight\">bin</span> for me?')
            done();
        });
        
        test('The parking lot was full.', function(done) {
            let text = 'The parking lot was full.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'The parking lot was full.')
            assert.equal(res.translation,'The <span class=\"highlight\">car park</span> was full.')
            done();
        });
        
        test('Like a high tech Rube Goldberg machine.', function(done) {
            let text = 'Like a high tech Rube Goldberg machine.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Like a high tech Rube Goldberg machine.')
            assert.equal(res.translation,'Like a high tech <span class=\"highlight\">Heath Robinson device</span>.')//Note
            done();
        }); 

        test('To play hooky means to skip class or work.', function(done) {
            let text = 'To play hooky means to skip class or work.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'To play hooky means to skip class or work.')
            assert.equal(res.translation,'To <span class=\"highlight\">bunk off</span> means to skip class or work.')
            done();
        }); 

        test('No Mr. Bond, I expect you to die.', function(done) {
            let text = 'No Mr. Bond, I expect you to die.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'No Mr. Bond, I expect you to die.')
            assert.equal(res.translation,'No <span class=\"highlight\">Mr</span> Bond, I expect you to die.')
            done();
        }); 

        test('Dr. Grosh will see you now.', function(done) {
            let text = 'Dr. Grosh will see you now.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Dr. Grosh will see you now.')
            assert.equal(res.translation,'<span class=\"highlight\">Dr</span> Grosh will see you now.')
            done();
        }); 

        test('We watched the footie match for a while.', function(done) {
            let text = 'We watched the footie match for a while.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'We watched the footie match for a while.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('Paracetamol takes up to an hour to work.', function(done) {
            let text = 'Paracetamol takes up to an hour to work.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Paracetamol takes up to an hour to work.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('First, caramelise the onions.', function(done) {
            let text = 'First, caramelise the onions.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'First, caramelise the onions.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('I spent the bank holiday at the funfair.', function(done) {
            let text = 'I spent the bank holiday at the funfair.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'I spent the bank holiday at the funfair.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('I had a bicky then went to the chippy.', function(done) {
            let text = 'I had a bicky then went to the chippy.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'I had a bicky then went to the chippy.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('I\'ve just got bits and bobs in my bum bag.', function(done) {
            let text = 'I\'ve just got bits and bobs in my bum bag.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'I\'ve just got bits and bobs in my bum bag.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('The car boot sale at Boxted Airfield was called off.', function(done) {
            let text = 'The car boot sale at Boxted Airfield was called off.';
            let locale = 'american-to-british'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'The car boot sale at Boxted Airfield was called off.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 
    })

    suite('Translate to American English', function() {

        test('Have you met Mrs Kalyani?', function(done) {//Here
            let text = 'Have you met Mrs Kalyani?';
            let locale = 'british-to-american'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Have you met Mrs Kalyani?')
            assert.equal(res.translation,'Have you met <span class=\"highlight\">Mrs.</span> Kalyani?')
            done();
        }); 

        test('Prof Joyner of King\'s College, London.', function(done) {
            let text = 'Prof Joyner of King\'s College, London.';
            let locale = 'british-to-american'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Prof Joyner of King\'s College, London.')
            assert.equal(res.translation,'<span class="highlight">Prof.</span>  Joyner of King\'s College, London.')
            done();
        }); 

        test('Tea time is usually around 4 or 4.30.', function(done) {
            let text = 'Tea time is usually around 4 or 4.30.';
            let locale = 'british-to-american'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Tea time is usually around 4 or 4.30.')
            assert.equal(res.translation,'Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.')
            done();
        }); 

        test('Mangoes are my favorite fruit.', function(done) {
            let text = 'Mangoes are my favorite fruit.';
            let locale = 'british-to-american'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Mangoes are my favorite fruit.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('I ate yogurt for breakfast.', function(done) {
            let text = 'I ate yogurt for breakfast.';
            let locale = 'british-to-american'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'I ate yogurt for breakfast.')
            assert.equal(res.translation,'Everything looks good to me!')
            done();
        }); 

        test('We watched the footie match for a while.', function(done) {
            let text = 'We watched the footie match for a while.';
            let locale = 'british-to-american'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'We watched the footie match for a while.')
            assert.equal(res.translation,'We watched the <span class=\"highlight\">soccer</span> match for a while.')
            done();
        }); 

        test('Paracetamol takes up to an hour to work.', function(done) {
            let text = 'Paracetamol takes up to an hour to work.';
            let locale = 'british-to-american'
            let res = translator.translate(text, locale)
            assert.equal(res.text,'Paracetamol takes up to an hour to work.')
            assert.equal(res.translation,'<span class=\"highlight\">Tylenol</span> takes up to an hour to work.')
            done();
        }); 
    })
});
