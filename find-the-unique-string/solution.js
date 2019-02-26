const getFrequency = (str) =>
  str
    .replace(' ', '')
    .split('')
    .map(char => char.toLowerCase())
    .reduce((acc, char) => ({
      ...acc,
      [char]: acc[char] === undefined ? 0 : acc[char]++,
    }), {})

const checkFreqs = (baseFreq, freq) =>
  Object
    .keys(baseFreq)
    .reduce((index, char) =>
      (freq[char] !== undefined ? index - 1 : index),
    Object.keys(freq).length)

export default (arr) =>
  arr
    .map((str) => ({ str, freq: getFrequency(str) }))
    .reduce((arr, data) => {
      const r = arr.findIndex(el => checkFreqs(el.freq, data.freq) === 0)
      if (r !== -1) {
        arr[r].count += 1
      } else {
        arr.push({
          ...data,
          count: 0,
        })
      }

      return arr
    }, [])
    .sort((a, b) => a.count - b.count)[0].str
