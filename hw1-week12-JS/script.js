let word1 = prompt('Birinshi sozdi engiziniz:')
let word2 = prompt('Ekinshi sozdi engiziniz:')

function compareWords(word1, word2) {
  let firstword = word1.toLowerCase()
  let secondword = word2.toLowerCase()

  if (firstword == secondword) {
    return 'Sozder birdei'
  } else {
    return 'Sozder arturli'
  }
}
alert(compareWords(word1, word2))