function isChar(str) {
  return str.length === 1 && str.match(/[a-z]/i) !== null;
}

function isSmallWord(startIndex, endIndex) {
  const charCount = endIndex - startIndex + 1;
  return charCount < 4;
}

function getAbbreviate(startIndex, endIndex, arr) {
  let res = arr[startIndex];
  if (isSmallWord(startIndex, endIndex)) {
    for (let i = startIndex + 1; i <= endIndex; i++) {
      res += arr[i];
    }
  } else {
    res += endIndex - startIndex - 1;
    res += arr[endIndex];
  }

  return res;
}

function inWord(curr, index, arr) {
  if (!isChar(curr)) {
    endIndex = index - 1;
    list.push(getAbbreviate(startIndex, endIndex, arr));
    list.push(curr);

    return false;
  }
  if (index === arr.length - 1) {
    endIndex = index;
    list.push(getAbbreviate(startIndex, endIndex, arr));

    return false;
  }
  if (isChar(curr)) {
    return true;
  }
}

function outWord(curr, index, arr) {
  if (!isChar(curr)) {
    list.push(curr);
    return false;
  }

  if (index === arr.length - 1) {
    list.push(curr);
  }
  startIndex = index;
  return true;
}

let startIndex = 0;
let endIndex = 0;
let list = [];

let abbreviate = function(str) {
  list = [];

  str.split('').reduce(function(res, curr, index, arr) {
    return res ? inWord(curr, index, arr) : outWord(curr, index, arr);
  }, false);

  return list.join('');
};

export default abbreviate;
