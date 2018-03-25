[unary-function-chainer](https://www.codewars.com/kata/unary-function-chainer/train/javascript)
=

Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

```javascript
chained([a,b,c,d])(input)
```
Should yield the same result as

```javascript
d(c(b(a(input))))
```

