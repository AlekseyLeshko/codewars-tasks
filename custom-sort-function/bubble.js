export default (items) => {
  for (let i = 0; i < items.length; i++) {
    for (let j = i; j < items.length; j++) {
      if (items[j] < items[i]) {
        const swapVal = items[j]
        items[j] = items[i]
        items[i] = swapVal
      }
    }
  }

  return items
}
