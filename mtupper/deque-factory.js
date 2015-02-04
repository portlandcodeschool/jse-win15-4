// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {

    var deque = {
        arr: values,
        length: makeDeque.arrLength,
        top: makeDeque.top,
        bottom: makeDeque.bottom,
        pop: makeDeque.pop,
        push: makeDeque.push,
        shift: makeDeque.shift,
        unshift: makeDeque.unshift,
        cut: makeDeque.cut,
        map: makeDeque.map,
        sort: makeDeque.sort
    };

	// return an instance object
    return deque;

}

// The factory's instance methods:
makeDeque.arrLength = function() {
    return this.arr.length;
};

makeDeque.top = function() {
    if (this.arr.length == 0) return undefined;
	return this.arr[this.arr.length - 1];
};

makeDeque.bottom = function() {
    if (this.arr.length == 0) return undefined;
    return this.arr[0];
};

makeDeque.pop = function() {
	return this.arr.pop();
};

makeDeque.push = function(val) {
    return this.arr.push(val);
};

makeDeque.shift = function() {
    return this.arr.shift();
};

makeDeque.unshift = function(val) {
    return this.arr.unshift(val);
};

makeDeque.cut = function() {
    var cutDeque = [];
    var cutPoint = this.arr.length;

    if (cutPoint % 2 !== 0) {
        cutPoint = (cutPoint - 1) / 2;
    }
    else {
        cutPoint = (cutPoint / 2) - 1;
    }

    for (var i = cutPoint; i < this.arr.length; i++) cutDeque.push(this.arr[i]);
    for (var j = 0; j < cutPoint; j++) cutDeque.push(this.arr[j]);
    this.arr = cutDeque;
    return this.arr;
};

makeDeque.sort = function(compareValsFn) {
	return this.arr.sort(compareValsFn);
};

makeDeque.map = function(convertValFn) {
    return this.arr.map(convertValFn);
};

// Feel free to write tests for your code!

