var isEven = x=>x%2 == 0;
console.log( isEven(3));

var btnNode = document.getElementsByTagName('button')[0];
btnNode.addEventListener('click', event=>{
	console.log('Button was clicked!');
})