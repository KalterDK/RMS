var array2 = ['data',0];

for (var i = 1; i <= array.length; i++) {
	var rand = Math.floor(Math.random() * array.length);
	array2[array2.length]= array2[array2.length-1] + array[rand];
}
var array3 = [];
array3[array3.length] = array2;

//Second cycle
for (var i = 1; i <= array.length; i++) {
	var rand = Math.floor(Math.random() * array.length);
	array2[array2.length]= array2[array2.length-1] + array[rand];
}

var array3 = [];
array3[array3.length] = array2;

//Third cycle
for (var i = 1; i <= array.length; i++) {
	var rand = Math.floor(Math.random() * array.length);
	array2[array2.length]= array2[array2.length-1] + array[rand];
}

var array3 = [];
array3[array3.length] = array2;
// document.querySelector('#array').innerHTML = array2