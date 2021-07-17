export default (word, words) => words.filter(w => getCache(w) === getCache(word))

export const getCache = (str) => str.split('').sort().toString()
