$(document).ready(function(){
	var n = 16;
	
	
	function createGrid(){
		var side = 500/n;
		var sidePx = side + "px";
		var totalGrid = n*n;
		if (n>0 && n<101) {
			for (var i = totalGrid - 1; i >= 0; i--) {
				$('.container').append('<div class="grid"></div>');
			};
			$('.grid').css({"width": sidePx, "height": sidePx});
		} else {
			alert("Please give me a number between 1 and 100. Try again.");
			resetBtnClick();
		}
	}

	function resetBtnClick(){
		$('#resetBtn').on('click', function(){
			n = prompt("How many squares would you like in 1 side? You can choose maximum 100.");
			createGrid();
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
			$('.colored').css({"background-color": rgb});
			hover();
			// When clicked, it canges every element with colored class, we want only those which are hovered over after the click.
		});
	}

	resetBtnClick();
	colorBtnClick();
	
	function hover(){
		$('.container').on('mouseenter', '.grid', function(){
				$(this).addClass('colored');
		});
	}
	
	hover();










	console.log(n);

	console.log('ok');
});