## Modules

<dl>
<dt><a href="#module_Histable">Histable</a></dt>
<dd></dd>
</dl>

## External

* [Immutable](#external_Immutable)

<a name="module_Histable"></a>

## Histable
**Example**  
```javascript
const histable = require('histable')
const history = histable.create()
history.push(1)
history.push(2)
history.push(3)
history.undo() // 2
history.undo() // 1
history.undo() // undefined
```

* [Histable](#module_Histable)
    * [.History](#module_Histable.History)
        * [.canUndo](#module_Histable.History+canUndo) ⇒ <code>boolean</code>
        * [.canRedo](#module_Histable.History+canRedo) ⇒ <code>boolean</code>
        * [.push(value)](#module_Histable.History+push)
        * [.redo()](#module_Histable.History+redo) ⇒ <code>[Immutable](#external_Immutable)</code>
        * [.undo()](#module_Histable.History+undo) ⇒ <code>[Immutable](#external_Immutable)</code>
        * [.log()](#module_Histable.History+log)
    * [.create(limit)](#module_Histable.create) ⇒ <code>History</code>

<a name="module_Histable.History"></a>

### Histable.History
Creates a new History

**Kind**: static class of <code>[Histable](#module_Histable)</code>  

* [.History](#module_Histable.History)
    * [.canUndo](#module_Histable.History+canUndo) ⇒ <code>boolean</code>
    * [.canRedo](#module_Histable.History+canRedo) ⇒ <code>boolean</code>
    * [.push(value)](#module_Histable.History+push)
    * [.redo()](#module_Histable.History+redo) ⇒ <code>[Immutable](#external_Immutable)</code>
    * [.undo()](#module_Histable.History+undo) ⇒ <code>[Immutable](#external_Immutable)</code>
    * [.log()](#module_Histable.History+log)

<a name="module_Histable.History+canUndo"></a>

#### history.canUndo ⇒ <code>boolean</code>
Determines if undo() is possible or not

**Kind**: instance property of <code>[History](#module_Histable.History)</code>  
<a name="module_Histable.History+canRedo"></a>

#### history.canRedo ⇒ <code>boolean</code>
Determines if redo() is possible or not

**Kind**: instance property of <code>[History](#module_Histable.History)</code>  
<a name="module_Histable.History+push"></a>

#### history.push(value)
Adds the `value` to the history data structure.
Addition only happens if the new value is not the same as the last one.

**Kind**: instance method of <code>[History](#module_Histable.History)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>[Immutable](#external_Immutable)</code> | the [Immutable](https://facebook.github.io/immutable-js/) that needs to be saved |

<a name="module_Histable.History+redo"></a>

#### history.redo() ⇒ <code>[Immutable](#external_Immutable)</code>
Moves the state one step forward if possible

**Kind**: instance method of <code>[History](#module_Histable.History)</code>  
<a name="module_Histable.History+undo"></a>

#### history.undo() ⇒ <code>[Immutable](#external_Immutable)</code>
Moves the state one step backwords if possible

**Kind**: instance method of <code>[History](#module_Histable.History)</code>  
<a name="module_Histable.History+log"></a>

#### history.log()
A logging Util to view whats in the history data structure

**Kind**: instance method of <code>[History](#module_Histable.History)</code>  
<a name="module_Histable.create"></a>

### Histable.create(limit) ⇒ <code>History</code>
Creates a new history object

**Kind**: static method of <code>[Histable](#module_Histable)</code>  

| Param | Type | Description |
| --- | --- | --- |
| limit | <code>number</code> | Limits the size of the history to avoid memory leaks |

<a name="external_Immutable"></a>

## Immutable
The module works only when an immutable object is being pushed.
This helps in detecting changes faster and also pushing it on the stack only if there is a real change.

Immutable JS is one such library, but you can use it any other immutable library such as —
[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
or even the native immutables such as `string` , `Boolean`, `RegEx` etc.

**Kind**: global external  
**See**: [https://facebook.github.io/immutable-js](https://facebook.github.io/immutable-js)  
