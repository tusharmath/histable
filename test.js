/**
 * Created by tushar.mathur on 05/04/16.
 */

'use strict'
import {history} from './index'
import test from 'ava'

test('undo()', t => {
  const h = history()
  h.push(1)
  h.push(2)
  t.same(h.undo(), 1)
  t.same(h.undo(), void 0)
})

test('redo()', t => {
  const h = history()

  t.false(h.canUndo)
  t.false(h.canRedo)
  h.push(1) // [1]

  t.false(h.canUndo)
  t.false(h.canRedo)
  h.push(2) // [1, 2]

  h.push(3) // [1, 2, 3]

  t.true(h.canUndo)
  t.false(h.canRedo)

  t.same(h.undo(), 2) // [1, 2*, 3]

  t.true(h.canUndo)
  t.true(h.canRedo)
  t.same(h.redo(), 3) // [1, 2, 3*]

  t.true(h.canUndo)
  t.false(h.canRedo)
  t.same(h.redo(), void 0) // [1, 2, 3*]

  t.true(h.canUndo)
  t.false(h.canRedo)
  t.same(h.undo(), 2) // [1, 2*, 3]

  t.true(h.canUndo)
  t.true(h.canRedo)
  t.same(h.undo(), 1) // [1*, 2, 3]

  t.false(h.canUndo)
  t.true(h.canRedo)
  t.same(h.undo(), void 0) // [1*, 2, 3]

  t.false(h.canUndo)
  t.true(h.canRedo)
  t.same(h.redo(), 1)

  t.false(h.canUndo)
  t.true(h.canRedo)
  t.same(h.redo(), 2)

  t.true(h.canUndo)
  t.true(h.canRedo)
  t.same(h.redo(), 3)

  t.true(h.canUndo)
  t.false(h.canRedo)
  t.same(h.redo(), void 0)
})