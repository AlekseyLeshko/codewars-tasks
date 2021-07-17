export default function(string) {
  let find = /[a-z]{4,}/gi
  return string.replace(find, function replace(match) {
    let res = match[0]
    res += match.length - 2
    res += match[match.length - 1]

    return res
  })
}
