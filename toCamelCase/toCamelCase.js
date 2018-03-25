const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('').toLowerCase();

export default function(string) {
  const separators = /[_-\s]/gi;

  const newStr = string
    .split(separators)
    .filter(word => word)
    .map((word, index) => (index ? capitalize(word) : word.toLowerCase()))
    .join('');

  return newStr;
}
