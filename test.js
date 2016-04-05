/**
 * Created by tushar.mathur on 05/04/16.
 */

'use strict'
import {create} from './index'
import test from 'ava'

test('push()', t => {
  const h = create(199)
  t.is(h.push(1), h)
})

test('push():args', t => {
  const h = create(199)
  h.push(1, 2, 3, 4)
  t.is(h.undo(), 3)
})

test('undo()', t => {
  const h = create(100)
  h.push(1)
  h.push(2)
  t.is(h.undo(), 1)
  t.is(h.undo(), void 0)
})

test('canRedo', t => {
  const h = create(100)
  t.false(h.canRedo)

  h.push(1)
  t.false(h.canRedo)

  h.undo()
  h.push(2)
  t.false(h.canRedo)
})

test('canUndo', t => {
  const h = create(100)
  t.false(h.canUndo)

  h.push(1)
  t.false(h.canUndo)

  h.push(2)
  t.true(h.canUndo)
  h.undo()
  h.redo()
  t.true(h.canUndo)
})

test('redo()', t => {
  const h = create(100).push(1, 2, 3)
  t.is(h.redo(), void 0)
  h.undo() // 2
  t.is(h.redo(), 3)
  h.undo() // 2
  t.is(h.redo(), 3)
  t.is(h.redo(), void 0)
})

test('limit', t => {
  const h = create(2)
  h.push(1)
  h.push(2)
  h.push(3)
  h.push(4)
  t.is(h.undo(), 3)
  t.is(h.undo(), 2)
  t.is(h.undo(), void 0)
})

test('push+redo', t => {
  const h = create(5)
  h.push(1)
  h.push(2)
  h.undo()
  h.push(3)
  t.false(h.canRedo)
  t.is(h.redo(), void 0)
})

test('distinct pushes', t => {
  const h = create(5)
  h.push(1)
  h.push(2)
  h.push(2)
  t.is(h.undo(), 1)
  t.is(h.undo(), void 0)
})

test('redo+undo', t => {
  const h = create(199).push(
    'a',
    'ab',
    'abc',
    'abcd',
    'abcde'
  )
  t.is(h.undo(), 'abcd')
  t.is(h.undo(), 'abc')
  t.is(h.undo(), 'ab')
  t.is(h.undo(), 'a')
  t.is(h.undo(), void 0)
  t.is(h.redo(), 'a')
  t.is(h.redo(), 'ab')
  t.is(h.redo(), 'abc')
  t.is(h.redo(), 'abcd')
  t.is(h.redo(), 'abcde')
  t.is(h.redo(), void 0)
})
