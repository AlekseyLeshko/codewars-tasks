export default (min, max, step) => {
  const answer = [];
  for (let i = min; i <= max; i += step) {
    answer.push(i);
  }

  return answer;
};
