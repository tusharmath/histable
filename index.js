/**
 * Created by tushar.mathur on 08/01/16.
 */

'use strict'

const getLast = list => list[list.length - 1]

exports.history = limit => {
  var UNDO_HISTORY = []
  var REDO_HISTORY = []
  return {
    push (value) {
      const isDefined = value !== undefined
      const last = getLast(REDO_HISTORY)
      const isDiff = last !== value
      if ([isDefined, isDiff].every(Boolean)) {
        UNDO_HISTORY.push(value)
      }
    },
    redo () {
      if (REDO_HISTORY.length > 0) {
        const pop = REDO_HISTORY.pop()
        UNDO_HISTORY.push(pop)
        return pop
      }
    },
    undo () {
      if (UNDO_HISTORY.length > 0) {
        const pop = UNDO_HISTORY.pop()
        REDO_HISTORY.push(pop)
        return getLast(UNDO_HISTORY)
      }
    },
    get canUndo () {
      return UNDO_HISTORY.length > 1
    },
    get canRedo () {
      return REDO_HISTORY.length > 0
    },
    log () {
      console.log('UNDO:', UNDO_HISTORY)
      console.log('REDO:', REDO_HISTORY)
    }
  }
}
