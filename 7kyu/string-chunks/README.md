# [String chunks](https://www.codewars.com/kata/55b4f9906ac454650900007d)

## Description:

You should write a function that takes a string and a positive integer n, splits the string into parts of n length and returns them in an array. It is ok for the last element to have less characters than n.

If n is not a valid size(> 0) (or is absent), you should return an empty array.

If n is greater than the lenght of the string, you should return an array with the only element being the same string.

Examples:

```javascript
stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
stringChunk('sunny day', 0) // []
```