export default (numbers) => {
  const nums = numbers.split(' ').map(num => num % 2)
  const sum = nums.reduce((s, num) => s + num)
  const target = sum > 1 ? 0 : 1

  return nums.indexOf(target) + 1
}
