// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	// ...
	// return an instance object
	var deque = {
		values: values.slice(0),
		length: makeDeque.arrlength,
		top: makeDeque.top,
		bottom: makeDeque.bottom,
		pop: makeDeque.pop,
		push: makeDeque.push,
		shift: makeDeque.shift,
		unshift: makeDeque.unshift,
		cut: makeDeque.cut,
		map: makeDeque.map,
		sort: makeDeque.sort,
		shuffle: makeDeque.shuffle,
		isDiscarded: makeDeque.isDiscarded,
		discarded: []
	};

	return deque; 
}

// The factory's instance methods:
makeDeque.arrlength = function() {
	//...
	return this.values.length;
}

makeDeque.top = function() {
	//...
	return this.values[this.values.length - 1];
}

makeDeque.bottom = function() {
	//...
	return this.values[0];
}

makeDeque.pop = function() {
	//...
	this.discarded.push(this.values[this.values.length-1]);
	return this.values.pop();
}

makeDeque.push = function(val) {
	//...
	if (this.isDiscarded(val)) {
		return this.values.push(val);
	} else {
		return null;
	}
}

makeDeque.shift = function() {
	//...
	this.discarded.push(this.values[0]);
	return this.values.shift();
}

makeDeque.unshift = function(val) {
	//...
	if (this.isDiscarded(val)) {
		return this.values.unshift(val);
	} else {
		return null;
	}
}

makeDeque.cut = function() {
	//...
	var len = this.values.length;
	if (len < 2) { return null; }
	var mid = Math.ceil(len / 2);
	//0,2   2,4
	this.values = this.values.slice(mid, this.values.length).concat(this.values.slice(0, mid));

}

makeDeque.map = function(convertValFn) {
	//...
	return this.values.map(function (x) { return convertValFn(x); });
}


makeDeque.sort = function(compareValsFn){
	this.values.sort(compareValsFn);
}

makeDeque.shuffle = function() {
  var m = this.values.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.values[m];
    this.values[m] = this.values[i];
    this.values[i] = t;
  }

  return this.values;	
}
makeDeque.isDiscarded = function(val) {
	var v;
	(this.discarded.indexOf(val) == -1)?(v = false):(v = true);
	return v;
}
// Feel free to write tests for your code!

var vals = "abcdefghijklmnopqrstuvwxyz".split("");
var dequeA = makeDeque(vals);