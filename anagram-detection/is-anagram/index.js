const getFrequency = (str, hash, k = 1) =>
  str
    .toLowerCase()
    .split('')
    .reduce((h, s) => {
      !h[s] ? (h[s] = k * 1) : (h[s] += k * 1)
      return h
    }, hash)

export default (test, original) => {
  const freq = {}
  getFrequency(test, freq)
  getFrequency(original, freq, -1)
  return Object.keys(freq).every(k => freq[k] === 0)
}
