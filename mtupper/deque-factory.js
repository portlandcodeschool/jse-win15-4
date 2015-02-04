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
        cutPoint = (cutPoint - 1) / 2 + 1;
    }
    else {
        cutPoint = (cutPoint / 2);
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

// Used the solution for this, not original content...
makeDeque.shuffle = function () {
    // Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
    var end = this.array.length, temp, i;

    // While there remain elements to shuffle…
    while (end > 1) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * end--);

        // And swap it with the current element.
        temp = this.array[end];
        this.array[end] = this.array[i];
        this.array[i] = temp;
    }
    // always successful; no return val needed
};

// Used the solution for this, not original content...
makeDeque.readmit = function(val) { // returns true if val was absent
    var foundAt = this.absent.indexOf(val);
    if (foundAt < 0) // -1 if not found
        return false;
    // else found; excise from absent array
    this.absent.splice(foundAt,1);
    return true;
}

// Feel free to write tests for your code!

