//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE





/*
1. Return the all friends of a given customers name.
When returning the friends of the customer it
should be a string and NOT the friends array. 
*/

function friendsOfCustomer(name){
  //CODE BELOW HERE
 
// 1. We are dealing with an array datatype: Is there a way to
// look at each individual elements? What can you use?

//What condition needs to be true for a friends list to print?

// What should happen if you type your name into the function?

// should a friends list print? yes or no


for( i = 0; i <= customers.length - 1; i++){
 
if(name === customers[i].name){
  
  }
}

 //CODE ABOVE HERE
};
console.log(friendsOfCustomer('Shelly Walton'))





/*
2. Return the phone number and address of a 
given customer when their name is entered into the 
function.
*/

//Input:
//Output:
//Constraints:
//Edge Case:

function contactInfo(name){
  //CODE BELOW HERE
for(i = 0; i <= customers.length - 1; i++){
  if(name === customers[i].name){

  }
}


  //CODE ABOVE HERE
};
console.log(contactInfo('+1 (806) 578 2712'))