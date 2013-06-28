 
		    var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = 640;
            canvas.height = 480;
            document.body.appendChild(canvas);
			


			// background image
            var bgReady = false;
            var bgImage = new Image();

            bgImage.onload = function () {
                bgReady = true;
            };
            bgImage.src = "image/background.png";

            // player image
            var playerReady = false;
            var playerImage = new Image();
            playerImage.onload = function () {
                playerReady = true;
            };
            playerImage.src = "image/guywithbasket.png";

            // stuff image  
            var stuffReady = false;
            var stuffImage = new Image();
            stuffImage.onload = function () {
                stuffReady = true;
            };
            stuffImage.src = "image/apple.png";
	
	    
	    // bomb image  
            var bombReady = false;
            var bombImage = new Image();
            bombImage.onload = function () {
                bombReady = true;
            };
            bombImage.src = "image/fries.png";


	    // bomb#2 image  
            var bombReady2 = false;
            var bombImage2 = new Image();
            bombImage2.onload = function () {
                bombReady2 = true;
            };
            bombImage2.src = "image/fries.png";

	    var bombReady3 = false;
            var bombImage3 = new Image();
            bombImage3.onload = function () {
                bombReady3 = true;
            };
            bombImage3.src = "image/fries.png";
	    

	    var bombReady4 = false;
            var bombImage4 = new Image();
            bombImage4.onload = function () {
                bombReady4 = true;
            };
            bombImage4.src = "image/fries.png";

            // Game Objects
            var player = { speed: 256 };
            var stuff = { speed: 128 };
	    var bomb = { speed: 256};
	    var bomb2 = {speed: 200};
	    var bomb3 = {speed: 220};
	    var bomb4 = {speed: 190};	

            var caught = 0;
            var missed = 0;
            var keysDown = {};

            addEventListener("keydown", function (e) { keysDown[e.keyCode] = true;}, false);

            addEventListener("keyup", function (e) { delete keysDown[e.keyCode]; }, false);
               
            var currentX = canvas.width / 2;
	    var posX=32 + (Math.random() * (canvas.width - 64)), 
		posX2=32 + (Math.random() * (canvas.width - 64)),
		posX3=32 + (Math.random() * (canvas.width - 64)),
		posX4=32 + (Math.random() * (canvas.width - 64));
	    var posY=0, posY2=0, posY3=0, posY4=0;
	    var stuff_X = 32 + (Math.random() * (canvas.width - 64)),stuff_Y =0;

            //Reset the player's and stuff's positions
		var reset = function () {
                player.x = currentX, player.y = 400;
 

		if ((stuff_Y < 400))
		{	
			if (stuff_Y!=0)
				stuff.x = stuff_X, stuff.y=stuff_Y;
			else 
				stuff.x = 32 + (Math.random() * (canvas.width - 64)),stuff.y=stuff_Y;
		}
		else
			stuff.x = 32 + (Math.random() * (canvas.width - 64)), stuff.y 
		if (posY < 400)
		{	if (posY!=0)
				bomb.x = posX, bomb.y =posY ;
			else 
				bomb.x = 32 + (Math.random() * (canvas.width - 64)), bomb.y =posY ;
		}
		else 
			bomb.x = 32 + (Math.random() * (canvas.width - 64)), bomb.y=0
		if (posY2<400)
		{
			if (posY2!=0)
				bomb2.x = posX2,  bomb2.y =posY2;
			else 
				bomb2.x = 32 + (Math.random() * (canvas.width -64)),  bomb2.y =posY2;
		}				
		else 
			bomb2.x = 32 + (Math.random() * (canvas.width -64)),bomb2.y=0;
		if (posY3<400)
		{
			if (posY3!=0)
				bomb3.x = posX3, bomb3.y =posY3;
			else
				bomb3.x = 32 + (Math.random() * (canvas.width -64)), bomb3.y =posY3;
		}
		else 
			bomb3.x = 32 + (Math.random() * (canvas.width -64)),bomb3.y=0; 
		if (posY4<400)
		{
			if (posY4!=0)
				bomb4.x = posX4, bomb4.y =posY4;
			else
				bomb4.x = 32 + (Math.random() * (canvas.width -64)), bomb4.y =posY4;
		}

		else 	
			bomb4.x = 32 + (Math.random() * (canvas.width -64)),bomb4.y = 0;

            } 

            // Update game objects
            var update = function (modifier) {
                if (38 in keysDown) { // press up arrow key
                    // nothing happen
		
                }
                if (40 in keysDown) { // press down arrow key
                    // nothing happen
                }

                if (37 in keysDown) { // press left arrow key
		    if (player.x >0)
                    player.x -= player.speed * modifier; // move to the left
                  
                }
                if (39 in keysDown) { // press right arrow key
		    if (player.x < 608)
                    player.x += player.speed * modifier; // move to the right

                }

                stuff.y += stuff.speed * modifier; // for the stuff's movements
		bomb.y += bomb.speed * modifier; 
		bomb2.y += bomb2.speed * modifier; 
		bomb3.y += bomb3.speed * modifier;       
		bomb4.y += bomb4.speed * modifier;     

                if (stuff.y > 400) { // Does it touch the ground?
                    missed++;
		    stuff_Y = 0;
                    currentX = player.x;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    posY=bomb.y;
		    posY2=bomb2.y;
		    posY3=bomb3.y;
		    posY4=bomb4.y;
                    reset();
                }
		if (bomb.y > 400) { // Does it touch the ground?
                    
		    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
                    currentX = player.x;
		    posX=bomb.x;    
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    
		    posY=0;
		    posY2=bomb2.y;
		    posY3=bomb3.y;
		    posY4=bomb4.y;
                    reset();
                }
		if (bomb2.y > 400) { // Does it touch the ground?
                    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
                    currentX = player.x;
		    posX=bomb.x;
		    posX2=bomb2.x; 
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    
		    posY=bomb.y;
		    posY2=0;
		    posY3=bomb3.y;
		    posY4=bomb4.y;
                    reset();
                }
		if (bomb3.y > 400) { // Does it touch the ground?
                    
		    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
                    currentX = player.x;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    
		    posY=bomb.y;
		    posY3=0;
		    posY2=bomb2.y;
		    posY4=bomb4.y;
                    reset();
                }
		if (bomb4.y > 400) { // Does it touch the ground?
                    
		    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
                    currentX = player.x;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    	
		    posY=bomb.y;
		    posY4=0;
		    posY2=bomb3.y;
		    posY3=bomb4.y;
                    reset();
                }



                // Does the player get the stuff ? 
                if (
                    player.x <= (stuff.x + 32)
                    && stuff.x <= (player.x + 32)
                    && player.y <= (stuff.y + 32)
                    && stuff.y <= (player.y + 32) // conditions
                    ) {
                    ++caught;
                    currentX = player.x;
		    
		    stuff_X = stuff.x;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    stuff_Y = 0;
		    posY=bomb.y;
		    posY2=bomb2.y;
		    posY3=bomb3.y;
		    posY4=bomb4.y;
		    
                    reset();
                }

		if (
                    player.x <= (bomb.x + 32)
                    && bomb.x <= (player.x + 32)
                    && player.y <= (bomb.y + 32)
                    && bomb.y <= (player.y + 32) // conditions
                    ) {
                    missed +=1;
                    currentX = player.x;
		    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    
		    posY=0;
		    posY2=bomb2.y;
		    posY3=bomb3.y;
		    posY4=bomb4.y;
                    reset();    
                }


		if (
                    player.x <= (bomb2.x + 32)
                    && bomb2.x <= (player.x + 32)
                    && player.y <= (bomb2.y + 32)
                    && bomb2.y <= (player.y + 32) // conditions
                    ) {
                    missed +=1;
                    currentX = player.x;
		    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    
		    posY=bomb.y;
		    posY2=0;
		    posY3=bomb3.y;
		    posY4=bomb4.y;
                    reset();
                }

		if (
                    player.x <= (bomb3.x + 32)
                    && bomb3.x <= (player.x + 32)
                    && player.y <= (bomb3.y + 32)
                    && bomb3.y <= (player.y + 32) // conditions
                    ) {
                    missed +=1;
                    currentX = player.x;
		
		    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    

		    posY=bomb.y;
		    posY2=bomb2.y;
		    posY3=0;
		    posY4=bomb4.y;
                    reset();
		
                }
		if (
                    player.x <= (bomb4.x + 32)
                    && bomb4.x <= (player.x + 32)
                    && player.y <= (bomb4.y + 32)
                    && bomb4.y <= (player.y + 32) // conditions
                    ) {
                    missed +=1;
                    currentX = player.x;
		    
		    stuff_X = stuff.x;
		    stuff_Y = stuff.y;
		    posX=bomb.x;
		    posX2=bomb2.x;
		    posX3=bomb3.x;
		    posX4=bomb4.x
		    
		    posY=bomb.y;
		    posY2=bomb2.y;
		    posY3=bomb3.y;
		    posY4=0;////////////////
		    reset();
         	}
	   };
            var render = function () {
                if (bgReady) {
                    ctx.drawImage(bgImage, 0, 0);
                }

                if (playerReady) {
                    ctx.drawImage(playerImage, player.x, player.y);
                }

                if (stuffReady) {
                    ctx.drawImage(stuffImage, stuff.x, stuff.y);
                }
		if (bombReady) {  //// ok
		    ctx.drawImage(bombImage, bomb.x, bomb.y);
		}
		if (bombReady2) {  //// ok
		    ctx.drawImage(bombImage2, bomb2.x, bomb2.y);
		}
		if (bombReady3) {  //// ok
		    ctx.drawImage(bombImage3, bomb3.x, bomb3.y);
		}
		if (bombReady4) {  //// ok
		    ctx.drawImage(bombImage4, bomb4.x, bomb4.y);
		}
                // Score
                ctx.fillStyle = "rgb(150, 250, 100)";
                ctx.font = "24px Helvetica";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillText("caught: " + caught, 32, 32);

                ctx.fillStyle = "rgb(150, 250, 100)";
                ctx.font = "24px Helvetica";
                ctx.textAlign = "right";
                ctx.textBaseline = "top";
                ctx.fillText("missed: " + missed, 520, 32);
            };
            // The main game loop
            var main = function () {
                var now = Date.now();
                var delta = now - then;

                update(delta / 1000);
                render();

                then = now;
            };

            // Let's play this game!
            reset();
            var then = Date.now();
            setInterval(main, 1); // Execute as fast as possible
            

       