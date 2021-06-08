/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    return array.filter(el => Boolean(el))
}

//turns out for..of is marginally faster

module.exports = falsyBouncer