# [Mirror, Mirror](https://www.codewars.com/kata/52ffcf5eaff455b3c200074b)

## Description:

Write a function `evilTwin(obj)` which returns a new object with all the same properties as `obj`, and with an additional property `hasGoatee` set to `true`.

For example:

```javascript
var orig = {x: 5};
console.log(orig.x) // -> 5
console.log(orig.hasGoatee) // -> undefined
var twin = evilTwin(orig);
console.log(twin.x) // -> 5
console.log(twin.hasGoatee) // -> true
```

If the original object is modified, its twin should reflect the changes so:

```javascript
orig.z = 12
console.log(twin.z) // -> 12
```