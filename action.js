const LIGHT_BLUE = '#ccf5ff';
const OFF_WHITE = '#f7f7f7';

var row = 4;
var col = 4;

/*Color in grid spaces with default checker pattern*/
function clearGrid() {

	var sq_num;
	var id;
	var color;
	for (var i = 0; i < row; i++) {
 		for (var j = 0; j < col; j++){

 				sq_num = i*row + j + 1;
 				id = "g".concat(sq_num.toString());

 				if ((i+j+1)%2 == 0) {color = OFF_WHITE;}
 				else {color = LIGHT_BLUE;}

 				document.getElementById(id).style.backgroundColor = color;
 		}
	}
}

/*colors square s red where s = square's html element id*/
function colorSquare(s) {
	var sq_num = s.substring(1);
	var num = parseInt(sq_num);

	document.getElementById(s).style.backgroundColor = 'red';
}
