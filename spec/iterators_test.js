var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  }),

  describe('#min', function () {
    var myArr;
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
  }),

  describe('#each', function () {
    var myArr;
    beforeEach(function () {
      myArr = ["Calvin", "Junior", "Kanye"];
    });
    it('should return each value in an array', function () {
      newArr = [];  

      Iterators.each(myArr, function(name) {
        console.log("Hi " + name);
        newArr.push(name);
      });
      expect(myArr).to.eql(newArr);
    });
  });

  describe('#map', function () {
    var name;
    
    beforeEach(function () {
      oldName = ["Calvin", "Junior", "Flylo"];
    });

    it('should return the names uppercased in a new array', function () {
      var newName = ["CALVIN", "JUNIOR", "FLYLO"];
      
      function uppercase(elem) {
        return elem.toUpperCase();
      }
      
      expect(Iterators.map(oldName, uppercase)).to.eql(newName);
    });
  });



  describe('#filter', function () {
    var num;
    
    beforeEach(function () {
      num = [3, 5, 8, 10];
    });

    it('should return the numbers less than 6', function () {
      // var newNum = [];
      
        function lessThan(name) {
        if (num <= 6) {
        return num;
      }
      expect(Iterators.filter(num, lessThan)).to.eql([3, 5]);
    }
      
    });
  });


    describe('#reduce', function () {
    var num;
    
    beforeEach(function () {
      num = [3, 5, 8, 10];
    });

    it('should return one number', function () {
          var newNum = [26];

      function concat(a, b) {
      return a + b;
      }
      expect(Iterators.reduce(num, concat).to.eql([newNum]));
  });
});
});


