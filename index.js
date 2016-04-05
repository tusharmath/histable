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

const getLast = list => list[list.length - 1]

/**
 * Creates a new History
 * @class
 */
class History {
  constructor () {
    this.UNDO_HISTORY = []
    this.REDO_HISTORY = []
  }

  /**
   * Adds the `value` to the history data structure
   * @param {external:Immutable} value - the {@link https://facebook.github.io/immutable-js/ Immutable} that needs to be saved
   */
  push (value) {
    const isDefined = value !== undefined
    const last = getLast(this.REDO_HISTORY)
    const isDiff = last !== value
    if ([isDefined, isDiff].every(Boolean)) {
      this.UNDO_HISTORY.push(value)
    }
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
exports.history = limit => new History(limit)