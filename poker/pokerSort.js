const Card = require('./card')
const FiveCards = require('./fivecards')
const quickSort = require('./quickSort')
const FiveCardsComparator = require('./fivecards-comparator')
const sampleList = require('./fivecards-sample')

function generate5CardList(gencount) {
  // Generate List<FiveCards>
  let p5CardsList = []
  let deckCard = []

  // Make a Card Deck
  for (let s = Card.CLUB; s <= Card.SPADE; s++)
    for (let r = Card.ACE; r <= Card.KING; r++) {
      deckCard.push(new Card(s, r))
    }

  //console.log(`deckCard=${deckCard}`)
  for (let i = 1; i <= gencount; i++) {
    suffle(deckCard)
    //console.log(`deckCard=${deckCard}`)
    // Make a Card Deck
    let indDeck = 0

    let fc = new Array(5)
    let ipos = 0
    while (indDeck < deckCard.length) {
      fc[ipos] = deckCard[indDeck]
      indDeck++
      ipos++
      if (ipos == 5) {
        p5CardsList.push(new FiveCards(fc))
        ipos = 0
      }
    }
  }
  return p5CardsList
}
function suffle(list) {
  const SUFFLECOUNT = 100

  //println "List before Suffle"
  //printList(list);
  let oneOrzero = 0
  let lsize = list.length
  let ind = 0
  for (let i = 1; i <= SUFFLECOUNT * lsize; i++) {
    // random number  0 or 1
    oneOrzero = Math.random() <= 0.5 ? 0 : 1
    //console.log(`ind=${ind} rand=${oneOrzero} card=${list[ind]}`)
    if (oneOrzero === 0) {
      // swap with last element
      ;[list[ind], list[list.length - 1]] = [list[list.length - 1], list[ind]]
    } else {
      ind++
      ind %= lsize
    }
  }
  //println "List after Suffle"
  //printList(list);
}
function printFiveCardsList(fcList) {
  fcList.forEach((fc, i) => {
    console.log(`${i + 1} ${fc} -- [${fc.rankInfo}]`)
  })
}

// Main
// Test for Five Cards List
let list5card = generate5CardList(2)

// Add more sample data
sampleList.forEach((li5) => {
  list5card.push(new FiveCards(li5))
})
//list5card.push(...sampleList)
console.log('---init 5 cards list---')
printFiveCardsList(list5card)

//console.log('---sorted use compareTo---')
//printFiveCardsList(list5card.sort((left, right) => left.compareTo(right)))

let comp = new FiveCardsComparator()

console.log('---sorted use quickSort---')
printFiveCardsList(quickSort(list5card, comp.compare))
