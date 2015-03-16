//Homework 4.2   deque-template
//.a
// Problem 2a): build a deque factory
//-------



// The factory itself:
var deque ={};
function makeDeque(values) {
  
// return an instance object
 //deque = { arr:[makeDeque.arrLength(), makeDeque.top(),makeDeque.bottom(), makeDeque.pop(), 
               // makeDeque.push(), makeDeque.shift(), makeDeque.unshift(), makeDeque.cut(), 
                /*makeDeque.map()*/    //, makeDeque.sort()] }

  deque ={
   values:values,
   Length: makeDeque.Length,
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
  return deque;
} 

 


// The factory's instance methods:
//function calls

makeDeque.Length = function  () { 
  //var arrLength;
  var count=0;
  for (var i in this.values) {
    count++;
  //var arrLength = i.length;
  //return arrLength;
  }
  return count;
}


makeDeque.top = function() {
  
return this.values[0];
}

makeDeque.bottom = function () {
return this.values[this.Length()-1];
}

makeDeque.pop = function() {
  newArr=[];
  var r = this.values[this.Length()-1];
  for (var i =0;i< this.Length()-1; i++) {
    newArr +=this.values[i];
    //this.values = this.values-r;
}
    this.values=newArr;
return r;

}

makeDeque.push = function(val) {
return this.values[makeDeque.Length()]=val;
}

makeDeque.shift = function() {
r = this.values[0];
  this.values=this.values-r;
  return r;
}

makeDeque.unshift = function(val) {
  for (var i=length;i<0;i--) {
    this.values[i]=this.values[i-1];    //adds new index to end of the array and copies value to its right for entire array
  }
this.values[0]=val;  
return this.values;
}
//pick up from here-
makeDeque.cut = function() {
  var front = deque.arr.slice(0,(makeDeque.Length()/2));
  makeDeque.pop(front);
  makeDeque.push(front);
return deque;  
}


//test this and convertValFn

makeDeque.map = function(convertValsFn) {
  
  return (this.values).map(convertValsFn);
  }


var convertValsFn = function(val) {
  return  val+2;
}


makeDeque.sort = function(compareValsFn) {
  
  for (var count=0; count<(this.values.length); count++) {
    for (var i =0; i<(this.values.length); i++) {
      var a = (this.values[i]);
      var b = (this.values[i+1]);
      
      if( makeDeque.compareValsFn(a, b)===1) {
        this.values[i+1] = a;
        this.values[i] = b;
      }
    }
  }
  return this.values;
};


makeDeque.compareValsFn = function(a,b) {
 
    if (a> b)
      return 1;
    else if (a < b)
      return -1;
    else
      return 0;
}  
  

// Feel free to write tests for your code!


