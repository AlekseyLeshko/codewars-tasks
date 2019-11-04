import chain from './decision'
import { describe } from 'ava-spec'

function sum(x, y) {
  return x + y
}

function double(x) {
  return sum(x, x)
}

function minus (x, y) {
  return x - y
}

function addOne(x) {
  return sum(x, 1)
}

describe('born-to-be-chained:', it => {
  it('should return all anagrams for word', t => {
    const c = chain({ sum, minus, double, addOne })
    t.is(c.execute(), undefined)
    t.is(c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute(), 72)

    const c1 = c.sum(1, 2)
    t.is(c1.sum(2).execute(), 5)
    t.is(c1.double().execute(), 6)
    t.is(c1.minus(2).execute(), 1)
    t.is(c1.addOne().execute(), 4)

    const c2 = c1.sum(5)
    t.is(c2.sum(2).execute(), 10)
    t.is(c2.double().execute(), 16)
    t.is(c2.minus(2).execute(), 6)
    t.is(c2.addOne().execute(), 9)

    t.is(c2.execute(), 8)
    t.is(c.execute(), undefined)
    t.is(c1.execute(), 3)
  })
})
