$(document).ready(function(){
	var n = 16;
	
	function createGrid(){
		var side = 500/n;
		var sidePx = side + "px";
		var totalGrid = n*n;
		
		for (var i = totalGrid - 1; i >= 0; i--) {
			$('.container').append('<div class="grid"></div>');
		};
		$('.grid').css({"width": sidePx, "height": sidePx});
		hover();
	}

	function resetBtnClick(){
		$('#resetBtn').on('click', function(){
			n = prompt("How many squares would you like in 1 side? You can choose maximum 100.");
			if ( n > 0 && n < 101 ) {
				$('.grid').remove();
				createGrid();
			} else {
				do {
					n = prompt("That was not between 1 and 100. Please give me a number between 1 and 100. Try again.");
				} while ( n < 1 || n > 100 );
				createGrid();
			}
		});
	}

	function colorBtnClick(){
		function getRandomInt(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		$('#colorBtn').on('click', function(){
			var a = getRandomInt(0,255);
			var b = getRandomInt(0,255);
			var c = getRandomInt(0,255);
			var rgb = 'rgb(' + a + ',' + b + ',' + c + ')';
			console.log(rgb);
			$('.container').on('mouseenter', '.grid', function(){
				$(this).css({"background-color": rgb});
			});
		});
	}

	function blackBtnClick(){
		$('#blackBtn').on('click', function(){
			hover();
		});
	}

	function hover(){
		var rgb = 'rgb(0,0,0)';
		$('.container').on('mouseenter', '.grid', function(){
				$(this).css({"background-color": rgb});
		});
	}
	
	createGrid();
	resetBtnClick();
	colorBtnClick();
	blackBtnClick();
	










	console.log(n);

	console.log('ok');
});