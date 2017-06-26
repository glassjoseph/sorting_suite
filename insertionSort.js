function insertionSort(list) {

  var sorted = [list.pop()]

  while (list.length !== 0) {
    to_sort = list.pop()
    if (to_sort < sorted.slice(-1)[0]) {
      for (var i = (sorted.length - 1); i > -1; i--) {
        if (to_sort < sorted.slice(i)) {
         sorted.splice(i, 0, to_sort);
       }
      }
    } else {
      sorted.push(to_sort)
    }
  }
  return sorted;
}

module.exports = insertionSort
