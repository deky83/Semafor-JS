function semafor () {
	// body... 
		var boje = document.getElementsByClassName('boje');

		function changeToRed () {
			// body... 
			boje[0].style.background = 'red';
			boje[1].style.background = 'grey';
			boje[2].style.background = 'grey';	
		}
		changeToRed();

		function changeToYellow () {
			boje[1].style.background = 'yellow';
		}
		function changeToGreen () {
			boje[0].style.background = 'grey';
			boje[1].style.background = 'grey';
			boje[2].style.background = 'green';
		}
		var x = setTimeout(changeToYellow,3000);
		var y = setTimeout(changeToGreen, 5000);
		var z = setTimeout(changeToRed, 8000);

		var start = setInterval(semafor,14000);
	}
	semafor();

function semafor2 () {
	// body... 
		var boje2 = document.getElementsByClassName('boje2');
		
		function changeToGreen2 () {
			boje2[0].style.background = 'grey';
			boje2[1].style.background = 'grey';
			boje2[2].style.background = 'green';
		}
		changeToGreen2();

		function changeToYellow2 () {
			boje2[1].style.background = 'yellow';
		}
		
		function changeToRed2 () {
			boje2[0].style.background = 'red';
			boje2[1].style.background = 'grey';
			boje2[2].style.background = 'grey';
		}
		var x2 = setTimeout(changeToRed2,3000);
		var z2 = setTimeout(changeToYellow2, 8000);
		var y2 = setTimeout(changeToGreen2, 11000);
		
		var start2 = setInterval(semafor2,14000);
	
	}
	semafor2();
