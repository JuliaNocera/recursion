// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
var toReturn = []; //array of elements with className
	function checkForClass (node){ //traverse doc and find nodes with className
		if(node.classList){
			if(node.classList.contains(className)){//if node is found with className --> push to array toReturn
				toReturn.push(node);
			}
		}
		else{ //no match
			return;
		}
		
		if(node.childNodes.length > 0){ 
			for(var i = 0; i < node.childNodes.length; i++){
				checkForClass(node.childNodes[i]); //recurse
			}
		}
		else{ 
			return;
		}
	}
checkForClass(document.body); //start at the top of the DOM
return toReturn;
  // your code here
};
