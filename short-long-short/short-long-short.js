export default (firstStr, secondStr) =>
  firstStr.length > secondStr.length ? `${secondStr}${firstStr}${secondStr}` : `${firstStr}${secondStr}${firstStr}`
