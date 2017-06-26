const assert = require('chai').assert
const insertionSort = require('../insertionSort')

// const assert = require('chai').assert
// const add = require('../add')


describe('insertionSort', function() {
  context('given an array of letters', function() {
    it('it can return a sorted array', function() {
      assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
    })
    // it('it can return a sorted array of nine items', function() {
    //   assert.deepEqual(insertionSort(["d", "h", "b", "e", "a", "f", "g", "c"]), ["a", "b", "c", "d", "e", "f", "g", "h"])
    // })
  })
})
