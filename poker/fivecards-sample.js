const Card = require('./card')

const sampleImageList = [
  ['CL-A ', 'CL-6 ', 'SP-4 ', 'HE-3 ', 'DI-2 '],
  ['CL-A ', 'CL-6 ', 'SP-5 ', 'HE-3 ', 'DI-2 '],
  ['CL-A ', 'CL-K ', 'SP-Q ', 'HE-7 ', 'DI-5 '],
  ['CL-A ', 'DI-A ', 'CL-4 ', 'SP-3 ', 'HE-2 '],
  ['SP-K ', 'CL-K ', 'HE-J ', 'DI-8 ', 'CL-6 '],
  ['SP-K ', 'CL-K ', 'HE-J ', 'DI-8 ', 'CL-7 '],
  ['CL-A ', 'DI-A ', 'CL-3 ', 'SP-2 ', 'HE-2 '],
  ['SP-K ', 'CL-K ', 'CL-Q ', 'DI-Q ', 'HE-J '],
  ['SP-K ', 'CL-K ', 'DI-Q ', 'CL-Q ', 'CL-9 '],
  ['CL-A ', 'DI-A ', 'HE-A ', 'CL-3 ', 'SP-2 '],
  ['HE-K ', 'SP-K ', 'CL-K ', 'CL-Q ', 'DI-J '],
  ['HE-K ', 'SP-K ', 'CL-K ', 'DI-Q ', 'CL-8 '],
  ['CL-A ', 'DI-A ', 'HE-A ', 'SP-2 ', 'CL-2 '],
  ['HE-K ', 'SP-K ', 'CL-K ', 'DI-Q ', 'CL-Q '],
  ['HE-K ', 'SP-K ', 'CL-K ', 'DI-J ', 'CL-J '],
  ['CL-A ', 'DI-A ', 'HE-A ', 'SP-A ', 'CL-2 '],
  ['DI-K ', 'HE-K ', 'SP-K ', 'CL-K ', 'CL-Q '],
  ['CL-A ', 'DI-K ', 'HE-K ', 'SP-K ', 'CL-K '],
  ['CL-A ', 'CL-5 ', 'SP-4 ', 'HE-3 ', 'DI-2 '],
  ['CL-A ', 'CL-6 ', 'CL-5 ', 'CL-3 ', 'CL-2 '],
  ['CL-A ', 'CL-5 ', 'CL-4 ', 'CL-3 ', 'CL-2 '],
  ['HE-A ', 'HE-K ', 'HE-Q ', 'HE-J ', 'HE-10'],
]
const fiveCardsList = sampleImageList.map((fc) => fc.map((c) => Card.imageToCard(c)))

module.exports = fiveCardsList
