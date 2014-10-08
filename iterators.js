var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },

    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },

    each: function(name, callback) {
      for (var i = 0; i < name.length; i++) {
        callback(name[i]);
      }
    },

    map: function(name, callback) {
      var newArr = [];
      for (var i = 0; i < name.length; i++) {
        newArr.push(callback(name[i]));
      }
      return newArr;
    },


    filter: function (name, callback) {
      var newArr = [];
      for (var i = 0; i < name.length; i++) {
        newArr.push(callback(name[i]));
      }
      return newArr;
    },
    
    reduce: function (num, callback) {
      var newArr = [];
      for (var i = 0; i < num.length; i++) {
        newArr.push(callback(num[i]));
      }
      return newArr;
    },
  

    reject: function (num, callback) {
      var newArr = [];
      for (var i = 0; i < name.length; i++) {
      newArr.push(callback(name[i]));
      }
      return newArr;
    },
  };
  

module.exports = iterators;
