const Comparator = require('./comparator')

class CardComparator extends Comparator {
  constructor() {
    super()
  }
  compare(card1, card2) {
    return -card1.compareTo(card2)
  }
}

module.exports = CardComparator
