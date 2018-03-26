export default (r, g, b) => `${numToHex(r)}${numToHex(g)}${numToHex(b)}`;

const min = 0;
const max = 255;
const numToHex = num => {
  num = num < min ? min : num >= max ? max : num;
  return num === 0 ? '00' : num.toString(16).toUpperCase();
};
