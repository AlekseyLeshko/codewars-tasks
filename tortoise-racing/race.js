export default (v1, v2, g) =>
  v1 >= v2
    ? null
    : new Date(Math.round(3600000 * (g / Math.floor(v2 - v1))))
      .toISOString()
      .substr(11, 8)
      .split(':')
      .map(Number)
