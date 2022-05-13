const MOVEMENT = 60
const MOVEMENT_DIAGONAL = 2
let verticalMovement = 0
let horizontalMovement = 0
let diagonal = 0

window.onload = function() {
	const ball = document.querySelector('.circle');

	const play = document.querySelector('.playButton');

	const right = document.querySelector('.arrow-right');
	const left = document.querySelector('.arrow-left');
	const up = document.querySelector('.arrow-up');
	const down = document.querySelector('.arrow-down');


	const red = document.querySelector('.button-red');
	const blue = document.querySelector('.button-blue');
	const green = document.querySelector('.button-green');

	
	const ancho = window.getComputedStyle(document.querySelector('.container')).width;
	const alto = window.getComputedStyle(document.querySelector('.container')).height;

	// const position = ball.getBoundingClientRect(); 
	// console.log(position.top, position.right, position.bottom, position.left);

	function circleRed() {
		ball.style = 'background: red';
	}
	function circleBlue() {
		ball.style = 'background: #3A8DFF';
	}
	function circleGreen() {
		ball.style = 'background: green';
	}

	
	function moveBallRight() {
		horizontalMovement += MOVEMENT
		ball.style.marginLeft = horizontalMovement

		if(horizontalMovement > 1500) {
			horizontalMovement = -1600
		}
	}
	function moveBallLeft() {
		horizontalMovement -= MOVEMENT
		
		ball.style.marginLeft = horizontalMovement

		if(horizontalMovement < -1600) {
			horizontalMovement = 1500
		}
		console.log(horizontalMovement)
	}
	function moveBallUp() {
		verticalMovement -= MOVEMENT

		ball.style.marginTop = verticalMovement

		if(verticalMovement < -800) {
			verticalMovement = 880
		}
		console.log(verticalMovement)
	}
	function moveBallDown() {
		verticalMovement += MOVEMENT

		ball.style.marginTop = verticalMovement		
		
		if(verticalMovement > 880) {
			verticalMovement = -800
		}
		
		console.log(verticalMovement)
	}

	function noCrazy () {
		setInterval(randomize, 1000)

		randomize()
	}
		function randomize() {
			
			const movimientos = [
			'arriba', //[0]
			'abajo', //[1]
			'izquierda', //[2]
			'derecha', //[3]
			]

			const randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0
			
			const movimiento = movimientos[randomNumber]

			if(movimiento === 'arriba') {
				moveBallUp()
			}
			if(movimiento === 'abajo') {
				moveBallDown()
			}
			if(movimiento === 'izquierda') {
				moveBallLeft()
			}
			if(movimiento === 'derecha') {
				moveBallRight()
			}
		
		}



	function autoDiagonal() {
		diagonal += MOVEMENT_DIAGONAL

		ball.style.marginLeft = horizontalMovement
	}

	right.onclick = moveBallRight
	left.onclick = moveBallLeft
	up.onclick = moveBallUp
	down.onclick = moveBallDown
	play.onclick = noCrazy

	red.addEventListener('click', circleRed)
	blue.addEventListener('click', circleBlue)
	green.addEventListener('click', circleGreen)

	document.onkeydown = function(event) {
		switch (event.key) {
			case "ArrowRight":

			return moveBallRight()

			case "ArrowLeft":

			return moveBallLeft()

			case "ArrowUp":

			return moveBallUp()

			case "ArrowDown":

			return moveBallDown()
		}
	}
}