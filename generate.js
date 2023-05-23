const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetter = lowerCaseLetter.toUpperCase()
const numbers = "1234567890"

module.exports = function generate(amount) {
  let collection = []
  collection = collection.concat(lowerCaseLetter.split(''))
  collection = collection.concat(upperCaseLetter.split(''))
  collection = collection.concat(numbers.split(''))
  
  let id = ''
  for (let i = 1; i <= amount; i++) {
    let randomIndex =  Math.floor(Math.random() * collection.length)
    id += collection[randomIndex] 
  }
  
  const shortUrl = 'http://localhost:3000/' + id
  
  return shortUrl
}


