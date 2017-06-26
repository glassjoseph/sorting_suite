function bubbleSort(list) {
    //forEach?
  for (var i = 0; i < (list.length - 1); i++) {
    for (var index = 0; index < (list.length); index++) {
      // set previous and current
      var previous = list[index]
      var current = list[index + 1]

      // compare previous and current and
      // swap if previous > current
      if (list[index] > list[index + 1]) {
        console.log(`Swap previous '${previous}' with current '${current}'`)
        list[index] = current;
        list[index + 1] = previous;
      }

      // increment by 1
      console.log(previous, current)
      console.log(list)
      console.log(index)
    };
  };
  return list
};


bubbleSort(["d", "b", "a", "c"])

// var list = ["d", "b", "a", "c"]
// bubbleSort(["d", "b", "a", "c"])
// => ["a", "b", "c", "d"]

module.exports = bubbleSort
