export default (r, g, b) =>
  [r, g, b]
    .map(x => ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2))
    .join('')
    .toUpperCase();
