export default (h, d, vt) => {
  const m = h > d / 2 ? d -h : h
  const r = d / 2
  const H = vt / (Math.PI * Math.pow(r, 2))
  const a = 2 * Math.acos((r - m) / r)
  const s1 = (a * Math.pow(r, 2)) / 2

  const cathetus = 2 * Math.sqrt(Math.pow(r, 2) - Math.pow((r - m), 2))
  const p2 = (r + r + cathetus) / 2
  const s2 = Math.sqrt(p2 * (p2 - r) * (p2 - r) * (p2 - cathetus))

  const s = s1 - s2
  const v = s * H

  return Math.floor(h > d / 2 ? vt - v : v)
}
