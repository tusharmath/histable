/**
 * Created by tushar.mathur on 08/01/16.
 */

'use strict'

/**
 * The module works only when an immutable object is being pushed.
 * This helps in detecting changes faster and also pushing it on the stack only if there is a real change.
 *
 * Immutable JS is one such library, but you can use it any other immutable library such as —
 * {@link https://github.com/rtfeldman/seamless-immutable seamless-immutable}
 * or even the native immutables such as `string` , `Boolean`, `RegEx` etc.
 *
 *  @external Immutable
 * @see {@link https://facebook.github.io/immutable-js}
 */

/**
 * @example
 * ```javascript
 * const histable = require('histable')
 * const history = histable.create()
 * history.push(1)
 * history.push(2)
 * history.push(3)
 * history.undo() // 2
 * history.undo() // 1
 * history.undo() // undefined
 * ```
 * @module Histable
 */
const getLast = list => list[list.length - 1]

/**
 * Creates a new History
 * @class
 */
class History {
  constructor (limit) {
    this.UNDO_HISTORY = []
    this.REDO_HISTORY = []
    this.limit = limit > 0 ? limit : 0
  }

  /**
   * Adds the `value` to the history data structure.
   * Addition only happens if the new value is not the same as the last one.
   * @param {external:Immutable} value - the {@link https://facebook.github.io/immutable-js/ Immutable} that needs to be saved
   * @returns {this}
   */
  push (value) {
    const isDefined = value !== undefined
    const last = getLast(this.UNDO_HISTORY)
    const isDiff = last !== value
    if ([isDefined, isDiff].every(Boolean)) {
      this.UNDO_HISTORY.push(value)
    }
    if (this.UNDO_HISTORY.length > this.limit) {
      this.UNDO_HISTORY.shift()
    }
    this.REDO_HISTORY = []
    return this
  }

  /**
   * Moves the state one step forward if possible
   * @returns {external:Immutable}
   */
  redo () {
    if (this.REDO_HISTORY.length > 0) {
      const pop = this.REDO_HISTORY.pop()
      this.UNDO_HISTORY.push(pop)
      return pop
    }
  }

  /**
   * Moves the state one step backwords if possible
   * @returns {external:Immutable}
   */
  undo () {
    if (this.UNDO_HISTORY.length > 0) {
      const pop = this.UNDO_HISTORY.pop()
      this.REDO_HISTORY.push(pop)
      return getLast(this.UNDO_HISTORY)
    }
  }

  /**
   * Determines if undo() is possible or not
   * @returns {boolean}
   */
  get canUndo () {
    return this.UNDO_HISTORY.length > 1
  }

  /**
   * Determines if redo() is possible or not
   * @returns {boolean}
   */
  get canRedo () {
    return this.REDO_HISTORY.length > 0
  }

  /**
   * A logging Util to view whats in the history data structure
   */
  log () {
    console.log('UNDO:', this.UNDO_HISTORY)
    console.log('REDO:', this.REDO_HISTORY)
  }

}

/**
 * Creates a new history object
 * @param {number} limit - Limits the size of the history to avoid memory leaks
 * @returns {History}
 */
exports.create = limit => new History(limit)
