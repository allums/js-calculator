/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 var calculatorModule = (function () {

  //private variables
  var _memory = 0;
  var _total = 0;

  return {
     //public variables
    load: function(x){
      if(typeof x !== 'number'){
        throw new Error('not a number');
      }
    _total = x;
    return _total;
    },

    getTotal: function(){
      /*if(typeof x !== 'number'){
        throw new Error('not a number');*/
      return _total;
    },

    add: function(x){
      if(typeof x !== 'number'){
        throw new Error('not a number');
      }
      return _total += x;
    },

    subtract: function(x){
      if(typeof x !== 'number'){
        throw new Error('not a number');
      }
      return _total -= x;
    },

    multiply: function(x){
      if(typeof x !== 'number'){
        throw new Error('not a number');
      }
      return _total *= x;
    },

    divide: function(x){
      if(typeof x !== 'number'){
        throw new Error('not a number');
      }
      return _total /= x;
    },

    recallMemory: function(){
      return _memory;
    },

    saveMemory: function(){
      _memory = _total;
    },

    clearMemory: function(){
     _memory = 0;
    }
    
    
  };

});

var myCalculator = calculatorModule();

myCalculator.load(10);
myCalculator.add(10);
myCalculator.getTotal();

/**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */ 
   

  /**
   * Return the value of `total`
   * @return { Number }
   */



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */



  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

