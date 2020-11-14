JS methods in Array:

//Push: Add element to the end of the array 
var arr = ['a','b','c'];
var temp = arr.push('d');
console.log(arr);
console.log(temp);

//Pop: Delete the last element of an array
var arr = ['a','b','c'];
var temp = arr.pop();
console.log(arr);
console.log(temp);

//Shift: Removes the first element of an array
var arr = ['a','b','c'];
var temp = arr.shift();
console.log(arr);
console.log(temp);

//Unshift: Add first element into array
var arr = ['a','b','c'];
var temp = arr.unshift('s','t');
console.log(arr);
console.log(temp);

//Concat: Merge array format
var arr1 = ['a','b'];
var arr2 = ['c','d'];
var temp = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(temp);

//Slice: Array taken Array.slice(start,end) 
var arr = ['a','b','c','d','e','f'];
var temp = arr.slice(2,4);
console.log(arr);
console.log(temp);

//Splice: Delete array in functions
var arr = ['a','b','c','d','e','f'];
var temp = arr.splice(2,4);
console.log(arr);
console.log(temp);

//Splice: Array of insertion
var arr=['a','b','c','d','e','f'];
var temp=arr.splice(2,0,'g','h');   
console.log (arr);

//Splice: Array replace function
var arr=['a','b','c','d','e','f'];
var temp=arr.splice(2,1,'g');   
console.log (arr); 
console.log (temp);

//Reverse: Array is reversed
var arr=['a','b','c','d','e','f'];
var temp=arr.reverse();   
console.log (arr);
console.log (temp);

//join (Array to string)
var arr=['a','b','c','d','e','f'];
var temp=arr.join('-');   
console.log (arr); 
console.log (temp);


//Split (String to Array)
var str='abc-def-ghi-jk';
var temp=str.split('-');   
console.log (str); 
console.log (temp);

//sort () Array flip:
//sort characters
var arr1=['f','e','d','c','b','a'];
var temp1=arr1.sort();   
console.log (arr1); // "a, b, c, d, e, f", has changed the original array arr.
console.log (temp1); // "a, b, c, d, e, f", is returned in ascending order of the array.
// sort digital
var arr2=[5,4,3,2,1,0];
var temp2=arr2.sort();   
console.log (arr2); // "0,1,2,3,4,5", the original array arr has changed.
console.log (temp2); // "0,1,2,3,4,5", returns a sorted array from small to large. Disadvantages: can only be sorted array-digit

var arr3=[22,34,1,4,0,25];
function compareArr(val1,val2){	
  if(val1>val2){
    return 1;
  }else if(val1<val2){
    return -1;

  }else{
    return 0;		
  }
}
console.log (arr3.sort (compareArr));


//indexOf (): Format: Array .indexOf (elements you are looking for, start looking for the index);
var arr=['a','e','c','d','e','f'];
console.log (arr.indexOf ( 'e', 2)); 
//4 returns the index need to find elements
//returns the index 2 needs to find the element; console.log (arr.indexOf ( 'c'))

//forEach (): iterate Format: Array .forEach (function (item, index, array) {});
var arr=['a','e','c','d','e','f'];
arr.forEach(function(item, index, array){
  console.log (item); // a / b / c / d / e / f each element returns
  console.log (index); // Returns each element corresponding to subscript
  console.log (array); // return the entire array
})

//map (): iterate Format: Array .map (function (value, key) {});
var arr=[1,2,3,4,56];
var arr2= arr.map(function(value,key){
  console.log (value); // a / b / c / d / e / f each element returns
  console.log (key); // Returns each element corresponding to subscript
  return value * 2; // change the values of each element, it returns a new array
})

console.log(arr); //1,2,3,4,56
console.log(arr2); //2,4,6,8,112









