export default (arr, point) => {
  const xp = arr.map(p => p[0])
  const yp = arr.map(p => p[1])
  const [x, y] = point
  let c = false

  for (let i = 0, j = arr.length - 1; i < arr.length; j = i++) {
    if (
      ((yp[i] <= y && y < yp[j]) || (yp[j] <= y && y < yp[i])) &&
      x > (xp[j] - xp[i]) * (y - yp[i]) / (yp[j] - yp[i]) + xp[i]
    )
      c = !c
  }

  return c
}
