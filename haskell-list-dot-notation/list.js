const isRange = (str) => str.includes('..');

export default (options = { generator: ''  }) => {
  let generator = options.generator || '';
  generator = generator.trim();
  if (!generator.length) {
    return [];
  }

  const blocks = generator.split(',');
  const list = blocks
    .reduce((acc, str, index) => {
      if (isRange(str)) {
        const arr = str.split('..');
        const end = Number.parseInt(arr[1], 10);
        const start = Number.parseInt(arr[0], 10);
        const a = blocks[index - 1];
        const step = a ? (start - Number.parseInt(a, 10)) : 0;

        if (end >= start && step === 0) {
          acc = acc.concat(Array(end - start + 1).fill(start).map((_, index) => start + index));
          return acc;
        }

        if (end >= start && step > 0) {
          const count = end === start ? 1 : Math.ceil((end - start) / step);
          acc = acc.concat(Array(count).fill(start).map((_, index) => start + (index * step)));
          return acc;
        }

        if (end <= start && step < 0) {
          const count = Math.abs(Math.ceil((end - start) / step)) + 1;
          acc = acc.concat(Array(count).fill(start).map((_, index) => start + (index * step)));
          return acc;
        }

        return acc;
      }

      acc.push(Number.parseInt(str, 10));
      return acc;
    }, []);

  return list;
};
