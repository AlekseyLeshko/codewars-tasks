import {describe} from 'ava-spec'
import undoRedo from './undoRedo'

describe('undo/redo:', it => {
  it('undo tests', t => {
    var obj = {
      x: 1,
      y: 2,
    }

    var unRe = undoRedo(obj)

    t.is(unRe.get('x'), 1, 'The get method returns the value of a key')
    unRe.set('x', 10)
    t.is(unRe.get('x'), 10, 'The set method change the value of a key')
    unRe.undo()
    t.is(unRe.get('x'), 1, 'The get method returns the value of a key')
  })

  it('get/set tests', t => {
    var obj = {
      x: 1,
      y: 2,
    }

    var unRe = undoRedo(obj)

    t.is(unRe.get('x'), 1, 'The get method returns the value of a key')
    unRe.set('x', 3)
    t.is(unRe.get('x'), 3, 'The set method change the value of a key')
  })

  it('simple undo', t => {
    var obj = {
      x: 1,
      y: 2,
    }

    var unRe = undoRedo(obj)
    unRe.set('y', 10)
    t.is(unRe.get('y'), 10, 'The get method returns the value of a key')
    unRe.undo()
    t.is(unRe.get('y'), 2, 'The undo method restores the previous state')
    try {
      unRe.undo()
      t.is(false, 'It should have thrown an exception')
    } catch (e) {
      t.is(unRe.get('y'), 2)
    }
  })

  it('simple redo', t => {
    var obj = {
      x: 1,
      y: 2,
    }

    var unRe = undoRedo(obj)
    unRe.set('y', 10)
    t.is(unRe.get('y'), 10, 'The get method returns the value of a key')
    unRe.undo()
    t.is(unRe.get('y'), 2, 'The undo method restores the previous state')
    unRe.redo()
    t.is(unRe.get('y'), 10, 'The undo method restores the previous state')
    try {
      unRe.redo()
      t.is(false, 'It should have thrown an exception')
    } catch (e) {
      t.is(unRe.get('y'), 10)
    }
  })

  it('undo/redo', t => {
    var obj = {
      x: 1,
      y: 2,
    }

    var unRe = undoRedo(obj)
    unRe.set('y', 10)
    unRe.set('y', 100)
    unRe.set('x', 150)
    unRe.set('x', 50)
    t.is(unRe.get('y'), 100, 'The get method returns the value of a key')
    t.is(unRe.get('x'), 50, 'The get method returns the value of a key')
    unRe.undo()
    t.is(unRe.get('x'), 150, 'The undo method restores the previous state')
    t.is(unRe.get('y'), 100, 'The y key stays the same')
    unRe.redo()
    t.is(unRe.get('x'), 50, 'Undo the x value')
    t.is(unRe.get('y'), 100, 'The y key stays the same')
    unRe.undo()
    unRe.undo()
    t.is(unRe.get('x'), 1, 'Undo the x value')
    t.is(unRe.get('y'), 100, 'The y key stays the same')
    unRe.undo()
    unRe.undo()
    t.is(unRe.get('y'), 2, 'Undo the y value')
    t.is(unRe.get('x'), 1, 'The x key stays the same')
    try {
      unRe.undo()
      t.is(false, 'It should have thrown an exception')
    } catch (e) {
      t.is(unRe.get('y'), 2, 'There is nothing to undo')
    }
    unRe.redo()
    unRe.redo()
    unRe.redo()
    unRe.redo()
    t.is(unRe.get('y'), 100, 'y key redo state')
    t.is(unRe.get('x'), 50, 'y key redo state')
    try {
      unRe.redo()
      t.is(false, 'It should have thrown an exception')
    } catch (e) {
      t.is(unRe.get('y'), 100, 'There is nothing to redo')
    }
  })

  it('new key', t => {
    var obj = {
      x: 1,
      y: 2,
    }

    var unRe = undoRedo(obj)
    unRe.set('z', 10)
    t.is(unRe.get('z'), 10, 'A new key has been added')
    unRe.undo()
    t.is(unRe.get('z'), undefined, 'The z key should not exist')
    unRe.redo()
    t.is(unRe.get('z'), 10, 'A new key has been added')
  })

  it('delete key', t => {
    var obj = {
      x: 1,
      y: 2,
    }

    var unRe = undoRedo(obj)
    unRe.del('x')
    t.is(unRe.get('x'), undefined, 'The x key should not exist')
    t.true(!obj.hasOwnProperty('x'), 'The x key should be deleted')
    unRe.undo()
    t.is(unRe.get('x'), 1, 'A new key has been added')
    unRe.redo()
    t.is(unRe.get('x'), undefined, 'The x key should not exist')
    t.true(!obj.hasOwnProperty('x'), 'The x key should be deleted')
  })

  it('set/del', t => {
    var obj = {}

    var unRe = undoRedo(obj)
    unRe.set('x', 5)
    unRe.set('y', 6)
    t.deepEqual(obj, {x: 5, y: 6})

    unRe.undo()
    t.deepEqual(obj, {x: 5})

    unRe.set('y', 66)
    t.deepEqual(obj, {x: 5, y: 66})

    try {
      unRe.redo()
      t.is(false)
    } catch (e) {
      t.deepEqual(obj, {x: 5, y: 66})
    }
  })
})
