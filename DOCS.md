## Modules

<dl>
<dt><a href="#module_histable">histable</a></dt>
<dd></dd>
</dl>

## External

* [Immutable](#external_Immutable)

<a name="module_histable"></a>

## histable
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

* [histable](#module_histable)
    * _static_
        * [.create([limit])](#module_histable.create) ⇒ <code>History</code>
    * _inner_
        * [~History](#module_histable..History)
            * [new History([limit])](#new_module_histable..History_new)
            * [.canUndo](#module_histable..History+canUndo) ⇒ <code>boolean</code>
            * [.canRedo](#module_histable..History+canRedo) ⇒ <code>boolean</code>
            * [.push(...value)](#module_histable..History+push) ⇒ <code>this</code>
            * [.redo()](#module_histable..History+redo) ⇒ <code>[Immutable](#external_Immutable)</code>
            * [.undo()](#module_histable..History+undo) ⇒ <code>[Immutable](#external_Immutable)</code>
            * [.log()](#module_histable..History+log)

<a name="module_histable.create"></a>

### histable.create([limit]) ⇒ <code>History</code>
Creates a new history object

**Kind**: static method of <code>[histable](#module_histable)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [limit] | <code>number</code> | Sets the maximum number of [undo](undo) operations that one can perform. Prevents the system from causing a memory leaks because of keeping an infinitely large history. |

<a name="module_histable..History"></a>

### histable~History
Creates a new [History](History)

**Kind**: inner class of <code>[histable](#module_histable)</code>  

* [~History](#module_histable..History)
    * [new History([limit])](#new_module_histable..History_new)
    * [.canUndo](#module_histable..History+canUndo) ⇒ <code>boolean</code>
    * [.canRedo](#module_histable..History+canRedo) ⇒ <code>boolean</code>
    * [.push(...value)](#module_histable..History+push) ⇒ <code>this</code>
    * [.redo()](#module_histable..History+redo) ⇒ <code>[Immutable](#external_Immutable)</code>
    * [.undo()](#module_histable..History+undo) ⇒ <code>[Immutable](#external_Immutable)</code>
    * [.log()](#module_histable..History+log)

<a name="new_module_histable..History_new"></a>

#### new History([limit])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [limit] | <code>number</code> | <code>100</code> | Limits the maximum number of [undo](undo) operations. |

<a name="module_histable..History+canUndo"></a>

#### history.canUndo ⇒ <code>boolean</code>
Determines if [undo](undo) is possible or not

**Kind**: instance property of <code>[History](#module_histable..History)</code>  
<a name="module_histable..History+canRedo"></a>

#### history.canRedo ⇒ <code>boolean</code>
Determines if [redo](redo) is possible or not

**Kind**: instance property of <code>[History](#module_histable..History)</code>  
<a name="module_histable..History+push"></a>

#### history.push(...value) ⇒ <code>this</code>
Adds the `value` to the history data structure.
Addition only happens if the new value is not the same as the last one.

**Kind**: instance method of <code>[History](#module_histable..History)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ...value | <code>[Immutable](#external_Immutable)</code> | the [Immutable](#external_Immutable) that needs to be saved. |

<a name="module_histable..History+redo"></a>

#### history.redo() ⇒ <code>[Immutable](#external_Immutable)</code>
Moves the state one step forward if possible

**Kind**: instance method of <code>[History](#module_histable..History)</code>  
<a name="module_histable..History+undo"></a>

#### history.undo() ⇒ <code>[Immutable](#external_Immutable)</code>
Moves the state one step backwords if possible

**Kind**: instance method of <code>[History](#module_histable..History)</code>  
<a name="module_histable..History+log"></a>

#### history.log()
A logging Util to view whats in the history data structure

**Kind**: instance method of <code>[History](#module_histable..History)</code>  
<a name="external_Immutable"></a>

## Immutable
The module works only when an immutable object is being pushed.
This helps in detecting changes faster and also pushing it on the stack only if there is a real change.

Immutable JS is one such library, but you can use it any other immutable library such as —
[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
or even the native immutables such as `string` , `Boolean`, `RegEx` etc.

**Kind**: global external  
**See**: [https://facebook.github.io/immutable-js](https://facebook.github.io/immutable-js)  
