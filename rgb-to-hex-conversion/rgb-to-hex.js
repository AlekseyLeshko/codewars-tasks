export default (r, g, b) => {
  return numToHex(r) + numToHex(g) + numToHex(b);
};

const numToHex = (num) => {
  num = num >= 255 ? 255 : num;
  const str = num.toString(16);

  const hex = str.toUpperCase();

  return hex.length === 1 ? hex + hex : hex;
};
