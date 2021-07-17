export default (baseUrl, ignoreParams = []) => {
  const [domain, ...queryArr] = baseUrl.split(/\?|&|=/g)
  const paramArr = queryArr.reduce((arr, item, index) => {
    if (
      index % 2 === 0 &&
      !arr.includes(item) &&
      !ignoreParams.includes(item)
    ) {
      arr.push(item)
      arr.push(queryArr[index + 1])
    }

    return arr
  }, [])

  const queryStr = paramArr.reduce(
    (str, item, index) =>
      index % 2 === 0
        ? (str += `${item}=`)
        : index !== paramArr.length - 1
          ? (str += `${item}&`)
          : (str += item),
    '',
  )

  return `${domain}${queryStr.length === 0 ? '' : `?${queryStr}`}`
}
