## Classes

<dl>
<dt><a href="#History">History</a></dt>
<dd><p>Creates a new History</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#history">history(limit)</a> ⇒ <code><a href="#History">History</a></code></dt>
<dd><p>Creates a new history object</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_Immutable">Immutable</a></dt>
<dd><p>The module works only when an immutable object is being pushed.
This helps in detecting changes faster and also pushing it on the stack only if there is a real change.</p>
<p>Immutable JS is one such library, but you can use it any other immutable library such as —
<a href="https://github.com/rtfeldman/seamless-immutable">seamless-immutable</a>
or even the native immutables such as <code>string</code> , <code>Boolean</code>, <code>RegEx</code> etc.</p>
</dd>
</dl>

<a name="History"></a>

## History
Creates a new History

**Kind**: global class  

* [History](#History)
    * [.canUndo](#History+canUndo) ⇒ <code>boolean</code>
    * [.canRedo](#History+canRedo) ⇒ <code>boolean</code>
    * [.push(value)](#History+push)
    * [.redo()](#History+redo) ⇒ <code>[Immutable](#external_Immutable)</code>
    * [.undo()](#History+undo) ⇒ <code>[Immutable](#external_Immutable)</code>
    * [.log()](#History+log)

<a name="History+canUndo"></a>

### history.canUndo ⇒ <code>boolean</code>
Determines if undo() is possible or not

**Kind**: instance property of <code>[History](#History)</code>  
<a name="History+canRedo"></a>

### history.canRedo ⇒ <code>boolean</code>
Determines if redo() is possible or not

**Kind**: instance property of <code>[History](#History)</code>  
<a name="History+push"></a>

### history.push(value)
Adds the `value` to the history data structure.
Addition only happens if the new value is not the same as the last one.

**Kind**: instance method of <code>[History](#History)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>[Immutable](#external_Immutable)</code> | the [Immutable](https://facebook.github.io/immutable-js/) that needs to be saved |

<a name="History+redo"></a>

### history.redo() ⇒ <code>[Immutable](#external_Immutable)</code>
Moves the state one step forward if possible

**Kind**: instance method of <code>[History](#History)</code>  
<a name="History+undo"></a>

### history.undo() ⇒ <code>[Immutable](#external_Immutable)</code>
Moves the state one step backwords if possible

**Kind**: instance method of <code>[History](#History)</code>  
<a name="History+log"></a>

### history.log()
A logging Util to view whats in the history data structure

**Kind**: instance method of <code>[History](#History)</code>  
<a name="history"></a>

## history(limit) ⇒ <code>[History](#History)</code>
Creates a new history object

**Kind**: global function  

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
