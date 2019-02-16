const gcd = (a, b) => a ? gcd(b % a, a) : b
export default (arr) => arr.reduce(gcd) * arr.length
