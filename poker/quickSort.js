function quickSort(list, comp) {
  if (list.length <= 1) return list
  let piv = list[0]
  let low = list.filter((x) => comp(x, piv) < 0)
  let eql = list.filter((x) => comp(x, piv) === 0)
  let high = list.filter((x) => comp(x, piv) > 0)
  return quickSort(low, comp).concat(eql).concat(quickSort(high, comp))
}

module.exports = quickSort
