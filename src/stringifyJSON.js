// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  //termination and base cases 

    //null
  if(obj === null){
    return "null";
  }
    //combined undefined & Function as an object
  if(obj === undefined || obj.constructor === Function){
    return;
  }
    
     //string
  if(obj.constructor === String){
    return '"' + obj + '"';
  }

//handle object, & array

    //array
  if(Array.isArray(obj)){    
    if(obj.length){ //if there are elements in the obj array, then :
      var toReturn = []; //creates empty array to store values as they are stringified
      for(var i = 0; i < obj.length; i++){ //loops through elements of array
        toReturn.push(stringifyJSON(obj[i])); //recursive ~~ stringifies each element
      }
      return '[' + toReturn.join(",") + ']'; //removes from array and gets rid of extra set of '' :: "element", "element"; then wraps in '[]' to create stringified array
    }
    else{
      return '[]'; //returns empty array in string if obj.length === 0; 
    }
  }

 if (obj.constructor === Object) {
    var vals = []; 
      //the following will store and then use the key values of the obj
      for(var key in obj){
        vals.push(key); //creates an array that holds the just the 'keys' of the obj
      }
    if(vals.length){ //as long as the array isn't empty, do the following:
    var toReturnObj = ''; //this stores the strings to be bound by '{}' & returned

    for(var l = 0; l < vals.length; l++){ //iterates through key values
        var pos = vals[l]; //sets the val of pos to the key temporarily while the function iterates through and adds to toReturnObj string

        if (!pos || obj[pos] === undefined || typeof pos === 'function' || typeof obj[pos] === 'function') {
//checks against properties that will throw an error as described in first set of cases (termination cases)
        }
        else{
          if(l === vals.length-1){ //for the end of the iteration when we no longer need the comma seperator
          toReturnObj += stringifyJSON(pos) + ':' + stringifyJSON(obj[pos]); //turns input into a string (breaks down the process ~ simpler input value)
          }
          else{
          toReturnObj += stringifyJSON(pos) + ':' + stringifyJSON(obj[pos]) + ','; //same as above but adds comma at end for all instances except the last
          }
        }
      }
      return '{' + toReturnObj + '}'; //combines the string created in the previous steps and wraps in '{}'
    }
    else{
      return '{}'; //returns a stringified empty object if there are no values
    }
  }

  //for numbers & booleans & other valid inputs
    return obj.toString(); //returns simple input, such as numbers and booleans, in a string

};
