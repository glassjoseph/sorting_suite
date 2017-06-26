const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

// const assert = require('chai').assert
// const add = require('../add')


describe('bubbleSort', function() {
  context('given an array of letters', function() {
    it('it can return a sorted array', function() {
      assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
    })
  })
})
