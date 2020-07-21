let num=parseInt(prompt('Enter a positive number'));

//Create a array of 10 random numbers upto user input num
let arr=Array.from(Array(10)).map(x=>Math.floor(Math.random()*(num+1)));

//Filter odd numbers & give cube root
let oddcube=arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(oddcube)