const Card = require('./card')

function getPairs(list5) {
  //list5 -- list of five ranks
  if (list5.length < 2) return []
  else {
    if (list5[0] === list5[1]) return [list5[0]].concat(getPairs(list5.slice(2, list5.length)))
    else return getPairs(list5.slice(1, list5.length))
  }
}

function getPairTransform(fcList) {
  //fclist -- list of fiveCards ranks
  let pairList = getPairs(fcList)
  if (pairList.length === 0) {
    return [1, ...fcList] // no pair
  } else if (pairList.length === 1) {
    return [2, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
  } else if (pairList.length === 2) {
    // two pair or 4 cards
    if (pairList[0] !== pairList[1]) {
      // two pair
      return [3, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
    } else {
      // 4 cards
      return [8, pairList[0], ...fcList.filter((r) => !pairList.includes(r))]
    }
  }
  return [1, ...fcList] // no pair
}

const isStraight = (list5) =>
  list5.reduce(
    (prev, curr, i) => (i === list5.length - 1 ? prev : prev && list5[i] === list5[i + 1] + 1),
    true
  )

function changeAceToOne(fcList) {
  //fclist -- list of fiveCards ranks
  let resList = [...fcList]
  let aceIndex = resList.indexOf(14) // has Ace
  if (aceIndex !== -1) {
    resList[aceIndex] = 1
    resList.sort((x, y) => y - x)
  }
  return resList
}
function getStraightScore(fcList) {
  //fclist -- list of fiveCards ranks

  // return 0 if not straight
  // return fcList[0] if straight
  // return newList[0] if has Ace and changed to 1 is straight
  let straight = isStraight(fcList)
  if (straight) return fcList[0]

  let aceIndex = fcList.indexOf(14) // has Ace
  if (aceIndex !== -1) {
    let newList = changeAceToOne(fcList)
    if (isStraight(newList)) return newList[0]
  }
  return 0
}

function getStraightTransform(fcList) {
  //fclist -- list of fiveCards ranks
  let topVal = getStraightScore(fcList)
  return topVal ? [5, topVal] : [0]
}

function getTripleTransform(fcList) {
  let pairList = getPairs(fcList)  
  if (pairList.length === 1) {
    // one pair or triple
    if (fcList.filter((r) => pairList.includes(r)).length == 3) {
      // 원페어가 나온 상태에서 같은 패가 3개일 경우 = 트리플
      return [4, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
    }
  } else if (pairList.length === 2) {
    // two pair or full house or 4 cards
    if (pairList[0] !== pairList[1]) {
      // two pair or full house
      if (fcList.filter((r) => !pairList.includes(r)).length == 0) {
        // 두 개의 페어 중 남은 하나의 카드가 두 페어와 다르지 않을 때 = 하나가 트리플이라는 뜻 = 풀하우스
        return [7, fcList[0], fcList[4]] // 양 쪽의 숫자 하나씩만 가져와도 됨.
      }
    }
  }
  return [0] // no triple
}

function isFlush(fiveCards) {
  return fiveCards.fiveCards.every((ca) => (ca.suit === fiveCards.fiveCards[0].suit))
}

function pokerTransform(fiveCards) {
  //fiveCards -- A FiveCards Instance
  let fclist = fiveCards.fiveCards.map((ca) => (ca.rank === Card.ACE ? Card.KING + 1 : ca.rank))
  //fclist -- list of fiveCards ranks
  let pokerRankList = getPairTransform(fclist)
  let tempList = getStraightTransform(fclist)
  pokerRankList = tempList[0] > pokerRankList[0] ? tempList : pokerRankList
  // triple check & Full house check
  tempList = getTripleTransform(fclist)
  pokerRankList = tempList[0] > pokerRankList[0] ? tempList : pokerRankList
  // Flush check & Straight Flush check
  if (isFlush(fiveCards)) {
    // no pair일 때 모양이 다 같으면 flush
    if (pokerRankList[0] === 0) pokerRankList[0] = 6
    // Straight일 때 모양이 다 같으면 Straight flush
    else if (pokerRankList[0] === 5) pokerRankList[0] = 9    
  }
  return pokerRankList
}

module.exports = pokerTransform
