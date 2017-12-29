var array2 = [0];

for (var i = 1; i <= array.length; i++) {
	var rand = Math.floor(Math.random() * array.length);
	array2[array2.length]= array2[array2.length-1] + array[rand];
}
document.querySelector('#array').innerHTML = array2