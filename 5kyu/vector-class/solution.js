var Vector = function (components) {
  this.components = components;
};

Vector.prototype.add = function(that) {
  if (this.components.length !== that.components.length) {
    throw new Error('');
  }
  var components = [];
  for (var i=0; i<this.components.length; i++) {
    components.push(this.components[i] + that.components[i]);
  }
  return new Vector(components);
};

Vector.prototype.subtract = function(that) {
  if (this.components.length !== that.components.length) {
    throw new Error('');
  }
  var components = [];
  for (var i=0; i<this.components.length; i++) {
    components.push(this.components[i] - that.components[i]);
  }
  return new Vector(components);
};

Vector.prototype.dot = function(that) {
  if (this.components.length !== that.components.length) {
    throw new Error('');
  }
  var result = 0;
  for (var i=0; i<this.components.length; i++) {
    result += (this.components[i] * that.components[i]);
  }
  return result;
};

Vector.prototype.norm = function() {
  var result = 0;
  for (var i=0; i<this.components.length; i++) {
    result += (this.components[i] * this.components[i]);
  }
  return Math.sqrt(result);
};

Vector.prototype.equals = function(that) {
  if (this.components.length !== that.components.length) {
    return false;
  }
  for (var i=0; i<this.components.length; i++) {
    if (this.components[i] !== that.components[i]) {
      return false;
    }
  }
  return true;
};

Vector.prototype.toString = function() {
  return '(' + this.components.join() + ')';
};