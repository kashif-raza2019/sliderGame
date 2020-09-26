var canvas;
		var canvascontext;
		var ctx;
		var ballx = 50;
		var bally = 50;
		var ballspeedx = 8;
		var ballspeedy = 4;
		var slider1Y = 150;
		var slider2Y = 150;
		const paddleHeight = 120;
		const sliderWidth = 10;
		var player1Score = 0;
		var player2Score = 0;
		const maxScore = 100;
		
		
		function calculateMousePos(evt){
		
		 var rect = canvas.getBoundingClientRect();
		 var root = document.documentElement;
		 var mouseX = evt.clientX - rect.left - root.scrollLeft;
		 var mouseY = evt.clientY - rect.top - root.scrollTop;
		  return{
		    x:mouseX,
			y:mouseY
		  };
		}
		
		 document.getElementById("enter-btn").onclick = function(){
		  console.log("Hello There I am Kashif Raza. Winner will be announced Here!");
		  document.getElementById("enter").style.display = "none";
		    canvas = document.getElementById('gameCanvas');
			canvascontext = canvas.getContext('2d');
			ctx = canvas.getContext('2d');
			drawCanvas();
			var fps = 30;
			setInterval(function(){
			
			 moveEverything();
		     drawCanvas();
			 
			}, 1000/fps);
			canvas.addEventListener('mousemove', 
			function(evt) {
			     
				 var mousePos = calculateMousePos(evt);
				 slider1Y = mousePos.y - (paddleHeight/2);
			
			});
			
		}
		//Ball Reset
		
		function ballReset(){
		if(player2Score >= maxScore){
		 alert("Wow You Won!!");
		 console.log("Human Player Won!");
		  resetScore();

		}else if(player1Score>=maxScore)
		{
		  alert("AI beats you!");
		  console.log("Computer Won!");
		  resetScore();
		}
		ballspeedx = -ballspeedx;
		 ballx = canvas.width/2;
		 bally = canvas.height/2;
		
		}
		//Score Reset
		function resetScore(){
		  player1Score = 0;
		  player2Score = 0;
		}
		function moveAI(){
		
		var slider2YCenter = slider2Y + (paddleHeight/2);
		   if(slider2YCenter <bally - 30){
		     slider2Y += 5;
		   }else if(slider2YCenter > bally+30){
		    slider2Y -=5;
		   }
		}
		
		//Moving the Elements
		function moveEverything(){
		 moveAI();
		
		 ballx= ballx + ballspeedx;
		 bally= bally + ballspeedy;
		 if(ballx>canvas.width-3)
		 {
		   if(bally>slider2Y && bally<slider2Y+paddleHeight)
			  {
			    ballspeedx = -ballspeedx;
				var betay = bally - (slider1Y+ paddleHeight/2);
				ballspeedy = betay*0.20;
			  }else{
			  player2Score+=10;
			  ballReset();
			  
			 }
		 }else if(ballx<3){
		 
			  if(bally>slider1Y && bally<slider1Y+paddleHeight)
			  {
			    ballspeedx = -ballspeedx;
				var betay = bally - (slider1Y+ paddleHeight/2);
				ballspeedy = betay*0.40;
			  }else{
			  player1Score+=10;//To be before ballReset() 
			  ballReset();
			  
			 }
		 }
		 if(bally>canvas.height-3)
		 {
		   ballspeedy = -ballspeedy;
		 }else if(bally<3){
		  ballspeedy = -ballspeedy;
		 }
		 
		}
		
		//To create elements for the game
		function drawCanvas(){
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
		 canvascontext.fillRect(canvas.width-sliderWidth-5,slider2Y, sliderWidth,paddleHeight);
		 
		 canvascontext.fillStyle='white';
		 canvascontext.fillText("Your Score:", 80, 85);
		 canvascontext.fillText(player2Score, 100,100);
		 canvascontext.fillText("Computer Score:", canvas.width-120, 85);
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
	    
		}
		
		document.getElementById("reload").onclick = function(){
		  location.reload(true);
		 
		}