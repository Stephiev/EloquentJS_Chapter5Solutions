// Using the reduce method and concat method to flatten an array.

var arrays = [[1, 2, 3], [4, 5], [6]];

var flattenedArray = arrays.reduce(function(a,b) {

  return a.concat(b)

})

