var HTMLGen = function () {};

var tags = ['div', 'b', 'a', 'p', 'body', 'span', 'title', 'comment'];

tags.forEach(function(tag) {
  HTMLGen.prototype[tag] = function(content) {
    return '<' + tag + '>' + content + '</' + tag + '>';
  };
});

HTMLGen.prototype.comment = function(content) {
  return '<!--' + content + '-->';
};