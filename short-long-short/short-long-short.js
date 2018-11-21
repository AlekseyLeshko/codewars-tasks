export default (firstStr, secondStr) => {
  const longStr = firstStr.length > secondStr.length ? firstStr : secondStr;
  const shortStr = firstStr.length > secondStr.length ? secondStr : firstStr;
  return `${shortStr}${longStr}${shortStr}`;
};
