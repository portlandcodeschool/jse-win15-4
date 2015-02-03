// Problem 2a): build a deque factory
//-------

// The factory itself:
// NOTE to GRADERS - I changed the naming pattern
// I prefer to use "nouns or noun phrases" for entities & objects
// I prefer to use "verbs or verb phrases" for function names
// this results in a readable pattern of factory and instance naming as follows:

// blahFactory.doFactoryFunction(...)  this references the factory during these calls

// blahInstance.doInstanceFunction(...) this references the instance during these calls

function dequeFactory() {
		
	// **** properties of each deque factory
	
	// function to create and return deques
	this.makeDeque = function (values) {
		// **** root reference object for the instance
        var theNewDeque = {};

        // **** instance data properties of each deque
		theNewDeque.deque = [];			// track the live elements of the deque
		theNewDeque.popHistory = [];	// track the history of popped elements (taken off the top)
		theNewDeque.shiftHistory = [];	// track the history of shifted elements (taken off the bottom)
        theNewDeque.qLength = 0;

        // **** function properties of each deque
		theNewDeque.top     = dequeFactory.top; 
		theNewDeque.bottom  = dequeFactory.bottom; 
		theNewDeque.pop     = dequeFactory.pop; 
		theNewDeque.push    = dequeFactory.push;
		theNewDeque.shift   = dequeFactory.shift;
		theNewDeque.unshift = dequeFactory.unshift;
		theNewDeque.cut     = dequeFactory.cut;
		theNewDeque.map     = dequeFactory.map;
		theNewDeque.sort    = dequeFactory.sort;
        theNewDeque.shuffle = dequeFactory.shuffle;

	    if ( dequeFactory.isValidInputList(values) ) { 
			
	    	dequeFactory.populateDeque(values, theNewDeque.deque);	
            theNewDeque.qLength = theNewDeque.deque.length;	    
		    return theNewDeque;
		} else {
            debugger;
			return null;  // bad values
		}	    
	};
};

//-----------------------------
// Methods called though instances (where 'this' means the card instance):
//-----------------------------


//----------------------------------------------------- top
dequeFactory.top = function() {
	return this.deque[this.deque.length-1];  //TODO test if this returns undefined for zero length deques
};

//----------------------------------------------------- bottom
dequeFactory.bottom = function() {
    return this.deque[0];
};

//----------------------------------------------------- pop
dequeFactory.pop = function() {
	var temp = this.deque.pop();
    this.popHistory.unshift(temp);  // store the pop history
    this.qLength--;
    return temp;
};

//----------------------------------------------------- push
dequeFactory.push = function(val) {
	if ((typeof val !== 'undefined')) //&& (val in this.popHistory)
     {  // don't push undefined stuff
        this.qLength++;
        return this.deque.push(val);   
    } else {
        debugger;
        return null;
    }
};

//----------------------------------------------------- shift
dequeFactory.shift = function() {
	var temp = this.deque.shift();
    this.qLength--;
    this.shiftHistory.push(temp); // store the shift history
    return temp;
};

//----------------------------------------------------- unshift
dequeFactory.unshift = function(val) {
	if (typeof val  !== 'undefined') // && //&& (val in this.shiftHistory)
    {  // don't unshift undefined stuff
        this.qLength++;
        return this.deque.unshift(val);   
    } else {
        debugger;
        return null;
    }
};

//----------------------------------------------------- cut
dequeFactory.cut = function() {
    // flops the deque around the cut point and stores the modified copy back into deque
	if (this.deque.length >1 ) {
        var tempList = [];
        var cutPosition = Math.trunc(this.deque.length / 2); 

        // strategy: 
        // FIRST put the top half of deque into bottom half of tempList
        // SECOND put the bottom half of deque into top half of tempList 
        var j = 0;
        for (var i = cutPosition; i < this.deque.length; i++) {  // Top Half of deque
            tempList[j] = this.deque[i];
            j++;
        };
        for (var i = 0; i < cutPosition; i ++){  // Bottom Half of deque
            tempList[j] = this.deque[i];
            j++;
        }

        this.deque = tempList;
        //TODO improve the space efficiency of this by using single tempVar instead of an entire tempList...
        
    } else {
        return;  // cut causes no changes for deque length of 0 or 1.
    }
};

//----------------------------------------------------- shuffle
dequeFactory.shuffle = function() {
    // shuffles using STOLEN CODE from http://bost.ocks.org/mike/shuffle/
    if (this.deque.length >1 ) {
        // shuffle hapens only for length 2 or greater
        var copy = [];
        n = this.deque.length;              
        var i = 0;              
                
        // While there remain elements to shuffle…              
        while (n) {             
                
            // Pick a remaining element…                
            i = Math.floor(Math.random() * n--);                
                
            // And move it to the new array.                
            copy.push(this.deque.splice(i, 1)[0]);               
        } // end while(shuffling down the array length)             
                
        this.deque = copy;  // the shuffled copy is now the new deque               

      } else {
        return;  // shuffle causes no changes for deque length of 0 or 1.
    }
};

//----------------------------------------------------- map        // TODO fix this map function

convertValsFn = function(val) {
    val = val + 1;
    return val;  // increment the value
};

dequeFactory.map = function(mapFn) {
	for (var i = 0; i < this.deque.length; i++) {
     this.deque[i] = mapFn(this.deque[i]);
    };
    return this.deque; // return modified values
};


//----------------------------------------------------- sort
compareValsFn = function(a,b) {
    if ((typeof a ===  typeof b) &&
        (typeof b  === 'string' || typeof b === 'number')) {  // only allow sort comparisons for strings and numbers
        
        var isGreater = 0;  // equal
        if ( a > b ) {
            isGreater = 1; 
        } else if ( b > a ) {
            isGreater = -1;
        }
        return isGreater;
    }
    debugger;
    return null; // a & b were not comparable for sorting purposes
    //TODO look at the alternative from MDN which is just "return a - b;" to see how that works for strings.
};


dequeFactory.sort = function(sortFn) {
    this.deque.sort(sortFn);
};

//-----------------------------
// >>>>>>>> HELPER FUNCTIONS - 
//-----------------------------

dequeFactory.isValidInputList = function(valueList){
	// validate valueList is an array
	if (!( Array.isArray(valueList))
		&& ('pop' in valueList)  	 // has pop()
		&& ('push' in valueList) 	 // has push()
		&& ('length' in valueList))  // all we need is pop and length, but TODO add more better ways to verify this is an array-ish input
	{   
		debugger;
        return false;   // INPUT ERROR - at a minimum, object passed in must report the length and be able to pop data.
	} else {
		return true;
	}  	
};

dequeFactory.populateDeque = function(inputValues, newDequeValues){
	
    var typeName = typeof inputValues;

    if (dequeFactory.isValidInputList( inputValues) ){             // THE PROBLEM IS HERE.... NO NEW OBJECT IS CREATED, JUST AND EMPTY ONE
       for (var i = 0; i < inputValues.length; i++) {
            newDequeValues[i] = inputValues[i];   // TODO -- create a new version of the input value, don't just copy the reference
        } 
    } else {  // bad input list
        debugger;
        return null;
    }
    // print the output for debug/grading purposes
	dequeFactory.printDequeList(newDequeValues);
};

dequeFactory.printDequeList = function(dequeList) {
	// verbose output
	// TODO add some error checking
	//console.log("---------------------------------------------------------------------------------------");
    console.log("< ******  --> START of call to dequeFactory.printDequeList = function(dequeList); **** ");	
	for (var i = 0; i < dequeList.length; i++) {
		console.log("deque position="+ i + " contained: " + dequeList[i]);
	}
	console.log("********* --> END of call to dequeFactory.printDequeList = function(dequeList) **** >");
    //console.log("---------------------------------------------------------------------------------------");
};






// Feel free to write tests for your code!

//----------------------
// Simple Testing suite
// Supplement as needed!

function assert(claim,message) {
    if (!claim) console.error(message);
}

// create a factory
var myDequeFactory = new dequeFactory();

// create some deques
var array10 = [1,2,3,4,5,6,7,8,9,10];
var myDeque10 = myDequeFactory.makeDeque(array10);

//test the first deque 
assert(myDeque10.deque.length===10,  "length test failed, should be 10, reported " + myDeque10.deque.length);
assert(myDeque10.qLength===10,  "qLength test failed, should be 10, reported " + myDeque10.qLength);
assert(myDeque10.top()===10,  "top() test failed");
assert(myDeque10.bottom()===1,"bottom() failed");



//pop test
var temp = myDeque10.pop();
assert(temp===10,  "pop() test failed");

myDeque10.push(temp);  // push back what was popped
assert(myDeque10.top()===10,  "push() test failed");

//shift test
var temp = myDeque10.shift();
assert(myDeque10.bottom()===2 && temp ==1,  "shift() test failed");

//unshift test
myDeque10.unshift(1);
assert(myDeque10.bottom()===1,  "unshift() test failed");


// testing the qLength instance variable -why, I do not know... :-) 
assert(myDeque10.qLength == 10, "array damaged after tests, length should be 10, reported " + myDeque10.qLength);
if (myDeque10.qLength !== 10) {
    console.log("myDeque10.qLength = " + myDeque10.qLength);
    console.log("myDeque10.deque.length = " + myDeque10.deque.length);
    dequeFactory.printDequeList(myDeque10.deque);
}


console.log("---");
console.log("-------------------------------Cut() Test (BEFORE)------------------------------------------------");  
dequeFactory.printDequeList(myDeque10.deque);
myDeque10.cut();
console.log("------------------------------ Now Cut() ---------------------------------------------------------");
console.log("-------------------------------End Cut() Test (AFTER)---------------------------------------------");
dequeFactory.printDequeList(myDeque10.deque);
console.log("---");

console.log("-------------------------------sort() Test  (BEFORE)-----------------------------------------------"); 
dequeFactory.printDequeList(myDeque10.deque);
myDeque10.sort(compareValsFn);
console.log("------------------------------ Now sorted() (AFTER)------------------------------------------------");
dequeFactory.printDequeList(myDeque10.deque);
console.log("-------------------------------End sort() Test-----------------------------------------------------");
console.log("---");


console.log("-------------------------------map() Test  (BEFORE)------------------------------------------------");  
dequeFactory.printDequeList(myDeque10.deque);
myDeque10.map(convertValsFn);
console.log("------------------------------ Now mapped() (AFTER)------------------------------------------------");
dequeFactory.printDequeList(myDeque10.deque);
console.log("-------------------------------End map() Test -----------------------------------------------------");
console.log("---");

var array1 = [1];
var array1 = [1];
var myDeque1 = myDequeFactory.makeDeque(array1);

var array2 = [1,2];
var array2 = [1,2];
var myDeque2 = myDequeFactory.makeDeque(array2);

var array3 = [1,2,3];
var array3 = [1,2,3];
var myDeque3 = myDequeFactory.makeDeque(array3);

var array4 = [1,2,3,4];
var array4 = [1,2,3,4];
var myDeque4 = myDequeFactory.makeDeque(array4);

var array5 = [1,2,3,4,5];
var array5 = [1,2,3,4,5];
var myDeque5 = myDequeFactory.makeDeque(array5);

var array6 = [1,2,3,4,5,6];
var array6 = [1,2,3,4,5,6];
var myDeque6 = myDequeFactory.makeDeque(array6);

var array7 = [1,2,3,4,5,6,7];
var array7 = [1,2,3,4,5,6,7];
var myDeque7 = myDequeFactory.makeDeque(array7);

