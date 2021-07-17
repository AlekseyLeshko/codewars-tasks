export const deleteNth = (list, number) =>
  list.reduce((arr, item) =>
    count(arr, item) < number ? arr.concat(item) : arr, [])

const count = (arr, item) => arr.filter(i => i === item).length
