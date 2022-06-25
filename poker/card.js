const Comparable = require('./comparable')

class Card extends Comparable {
  static ACE = 1
  static JACK = 11
  static QUEEN = 12
  static KING = 13

  static CLUB = 1
  static DIAMOND = 2
  static HEART = 3
  static SPADE = 4

  constructor(s, r) {
    super()
    this.suit = s
    this.rank = r
  }

  toString() {
    let image
    switch (this.suit) {
      case Card.CLUB:
        image = 'CL-'
        break
      case Card.DIAMOND:
        image = 'DI-'
        break
      case Card.HEART:
        image = 'HE-'
        break
      case Card.SPADE:
        image = 'SP-'
        break
    }
    switch (this.rank) {
      case Card.ACE:
        image += 'A '
        break
      case Card.JACK:
        image += 'J '
        break
      case Card.QUEEN:
        image += 'Q '
        break
      case Card.KING:
        image += 'K '
        break
      case 10:
        image += '10'
        break
      default:
        image = image + this.rank + ' '
    }
    return `'${image}'`
  }

  compareTo(right) {
    const lrank = this.rank === Card.ACE ? Card.KING + 1 : this.rank
    const rrank = right.rank === Card.ACE ? Card.KING + 1 : right.rank

    return lrank - rrank
  }
  static compare(left, right) {
    const lrank = left.rank === Card.ACE ? Card.KING + 1 : left.rank
    const rrank = right.rank === Card.ACE ? Card.KING + 1 : right.rank

    return lrank - rrank
  }
  static imageToCard(image) {
    let cardImg = image.trim().split('-')
    let suit
    let rank
    switch (cardImg[0]) {
      case 'CL':
        suit = Card.CLUB
        break
      case 'DI':
        suit = Card.DIAMOND
        break
      case 'HE':
        suit = Card.HEART
        break
      case 'SP':
        suit = Card.SPADE
        break
    }
    switch (cardImg[1]) {
      case 'A':
        rank = Card.ACE
        break
      case 'J':
        rank = Card.JACK
        break
      case 'Q':
        rank = Card.QUEEN
        break
      case 'K':
        rank = Card.KING
        break
      default:
        rank = parseInt(cardImg[1])
    }
    return new Card(suit, rank)
  }
}

module.exports = Card
