var array = []
var len = 2048
for (var i = 1; i <= len; i++) {
	if (i <= len/4) { 16
		array[array.length]= 1;
		array[array.length]= -1;
	}
	else if (i <= (3*len/8)) {
		array[array.length]= 2;
		array[array.length]= -2;
	}
	else if(i <= (7*len/16)) {
		array[array.length]= 3;
		array[array.length]= -3;
	}
	else if(i <= (15*len/32)) {
		array[array.length]= 4;
		array[array.length]= -4;
	}
	else if(i <= (31*len/64)) {
		array[array.length]= 5;
		array[array.length]= -5;
	}
	else if(i <= (63*len/128)) {
		array[array.length]= 6;
		array[array.length]= -6;
	}
	else if(i <= (127*len/256)) {
		array[array.length]= 7;
		array[array.length]= -7;
	}
	else if(i <= (255*len/512)) {
		array[array.length]= 8;
		array[array.length]= -8;
	}
	else if(i <= (511*len/1024)) {
		array[array.length]= 9;
		array[array.length]= -9;
	}
	else if(i <= (511*len/1024 + 1)) {
		array[array.length]= 10;
		array[array.length]= -10;
	}
}