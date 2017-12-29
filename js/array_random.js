var array2 = [];

for (var i = 1; i <= array.length; i++) {
	var rand = Math.floor(Math.random() * array.length);
	array2[array2.length]= array[rand];
}
alert(array2);