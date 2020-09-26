# sliderGame
This is my first short game using JavaScript and HTML with CSS stylesheet. Enjoy!!
### SLIDER GAME
Made using HTML canvas is a two **slider** game One is Human (Us) and another is our Web Browser.
Max Score: 100 (Mouse Control Only)
You can view/play the game by following this [link](https://kashif-raza2019.github.io/sliderGame/)
You can view Who wins how many times in the Console.
![download (2)](https://user-images.githubusercontent.com/56609517/94348443-fd7f4d80-0059-11eb-9dec-eed76bb96157.png)

**This is the Canvas Code for the Game!**

`function drawCanvas(){
	    //Drawing The Canvas
		 canvascontext.fillStyle = '#ba6d10';
		 canvascontext.fillRect(0,0,canvas.width,canvas.height);
		//Drawing the Ball
		//I put a great deal finding the erroe here :P!
		 ctx.fillStyle = '#17d88e';
		 ctx.beginPath();
		 ctx.arc(ballx, bally, 10, 0,Math.PI*2,true);
		 canvascontext.fill();
		//Drawing the Slider left Player-1
		 canvascontext.fillStyle = '#6e7270';
		 canvascontext.fillRect(5,slider1Y, sliderWidth,paddleHeight);
		 //Drawing the Slider Right Player-2
		 canvascontext.fillStyle = '#0eb7ac';
		 canvascontext.fillRect(canvas.width-sliderWidth-5,slider2Y, sliderWidth,paddleHeight);`
		 
		 canvascontext.fillStyle='white';
		 canvascontext.fillText("Your Score:", 80, 85);
		 canvascontext.fillText(player2Score, 100,100);
		 canvascontext.fillText("Computer Score:", canvas.width-80, 85);
		 canvascontext.fillText(player1Score, canvas.width-100,100);
		 //Drawing the Divider Line
		 canvascontext.fillStyle = 'white';
		 canvascontext.fillRect(canvas.width/2, 3, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 40, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 77, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 114, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 151, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 188, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 225, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 262, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 299, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 336, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 373, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 409, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 446, 1, 30);
		 canvascontext.fillRect(canvas.width/2, 483, 1, 14);
	    
		}`



