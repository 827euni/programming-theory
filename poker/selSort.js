function getMinIndex(list, rest, comp) {
  let minInd = rest
  for (let i = rest + 1; i < list.length; ++i) {
    if (comp(list[i], list[minInd]) < 0) {
      //if (list[i] < list[minInd]) { // string compare
      minInd = i
    }
  }
  return minInd
}
function getMaxIndex(list, rest, comp) {
  let maxInd = rest
  for (let i = rest + 1; i < list.length; ++i) {
    if (comp(list[i], list[maxInd]) > 0) {
      //if (list[i] > list[maxInd]) { // string compare
      minInd = i
    }
  }
  return maxInd
}
function selSort(list, comp) {
  let copy = [...list]
  let lsize = copy.length
  for (let i = 0; i < lsize; ++i) {
    let minit = getMinIndex(copy, i, comp)
    // swapNode(list, i, minit)
    ;[copy[i], copy[minit]] = [copy[minit], copy[i]]
  }
  return copy
}

module.exports = selSort
