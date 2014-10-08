# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`
----
"Higher-order functions" are functions that operate on other functions. They are either returned or taken as arguments. It allows us to "abstract" over actions, not just values.
----


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max`
----
"Max" returns the maximum value in/of an array.

numArray = [3,66,8,90]

it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(90);
    });
----


* `min`
----
"Min" returns the minimum value in/of an array.

numArray = [3,66,8,90]

it('should return the minimum in an array', function () {
  expect(Iterators.min(myArr)).to.equal(3);
});

----


* `each`
----
"Each" iterates over each value in an array in ascending order.

it("should return each value in the array", function() {
  expect(each.value(myArr)).to.equal("");
})
----


* `map`
----
"Map" loops over an array and returns a new array (which we can assign to a new variable)




----

* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
----
"Filter" iterates through an array and does what its name suggests, filters! Iterating through an array, it filters out certain values in an array which return a true value.
----


* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)


* `reject`: [note](http://underscorejs.org/#reject)

Use the notes provided to help guide you explanation.



### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

