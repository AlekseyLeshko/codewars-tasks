import PRESET_COLORS from './colors';

const hexToDec = (string) => parseInt(string, 16);

export default (str) => {
  let hex = (PRESET_COLORS[str.toLowerCase()] || str).slice(1);
  if (hex.length === 3) {
    hex = hex.replace(/./g, '$&$&');
  }

  return {
    r: hexToDec(hex.substring(0, 2)),
    g: hexToDec(hex.substring(2, 4)),
    b: hexToDec(hex.substring(4, 6)),
  };
};
