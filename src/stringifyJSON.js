// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  //termination cases 
    //undefined
  if(obj === undefined){
    return;
  }
    //null
  if(obj === null){
    return null;
  };
    //function
  if(typeOf obj === 'function'){
    return; 
  }
//handle string, object, & array
    
    //string
  if(typeOf obj === String){
    return "'" + obj + "'";
  } 

    //array
  if(Array.isArray(obj)){
    var toReturn = [];
    if(obj.length > 0){
      for(var i = 0; i < obj.length; i++){
       

  






  // your code goes here
};
