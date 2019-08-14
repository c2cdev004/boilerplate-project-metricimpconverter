/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input='26.36L'
      assert.equal(convertHandler.getNum(input),23.36);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input='1/2L'
      assert.equal(convertHandler.getNum(input),0.5)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input ='5/2.5L'
      assert.equal(convertHandler.getNum(input),2.5);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let Input ='2.5/2.5L'
      assert.equal(convertHandler.getNum(input),1.25);

      done();
    });
    
    test('No Numerical Input', function(done) {
      let input='gal';
      assert.equal(convertHandler.getNum(input),3.78541);

      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele),ele)
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input="1";
    assert.isNull(convertHandler.getUnit(input));
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'l'];
      var expected=2.6417217685798895;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);

      done();
    });
    
    test('Mi to Km', function(done) {
      let input =[2,'mi'];
      let expected=3.21868
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      
      let input=[3,'km'];
      let expected=1.8641182099494202;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input=[3,'Lbs'];
      let expected=1.360776;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);

      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input=[4,"kg"]
      let expected=8.81849768073511;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});