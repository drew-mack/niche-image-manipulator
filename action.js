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

 				sq_num = 1 + i*col + j;
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

/*Process a request for change in grid dimension*/
function submitDim() {
	var r = document.getElementById("rows").value;
	var c = document.getElementById("cols").value;

	var grid = document.getElementById("grid");

	//remove all squares
	var id;
	var sq_num;
	for(var i = 0; i < row; i++) {
		for(var j = 0; j < col; j++) {
			sq_num = i*col + j + 1;
 			id = "g".concat(sq_num.toString());
 			document.getElementById(id).remove();
		}
	}

	row = parseInt(r);
	col = parseInt(c);

	//populate new squares
	var grid_sq;
	for(var i = 0; i < row; i++) {
		for(var j = 0; j < col; j++) {
			sq_num = i*col + j + 1;
 			id = "g".concat(sq_num.toString());

 			grid_sq = document.createElement("div");
 			grid_sq.id = id;
 			grid_sq.addEventListener("click", function(){
 				colorSquare(this.id);
 			});
 			grid.appendChild(grid_sq);
		}
	}

	//resize grid
	grid.style.gridTemplateColumns = "repeat(".concat(col).concat(",auto)");
	grid.style.width = (25*col).toString().concat("px");
	grid.style.height = (25*row).toString().concat("px");

	clearGrid();
}

