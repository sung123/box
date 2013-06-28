
    		//create canvas and context
    		var canvas = document.createElement("canvas");
    		var context = canvas.getContext("2d");
    		//set canvas attributes
    		canvas.width = 200;
    		canvas.height = 100;

    		document.body.appendChild(canvas);
    		//initialize time variables
    		var min1 = 0;
    		var min2 = 0;
    		var sec1 = 0;
    		var sec2 = 0;
    		var initialized = false;
    		//create and fill image array
    		var numberimages = new Array();
    		var imgarrayReady = false;
    		for (var i = 0; i < 10; i++) {
    			numberimages[i] = new Image();
    			numberimages[i].src ="numImage/"+ i + ".png";
    		};
    		numberimages[10] = new Image();
    		numberimages[10].onload = function () {
    			imgarrayReady = true;
    		};
    		numberimages[10].src = "numImage/semicolon.png";

    		//update functions for each place on timer
    		var updatmin1 = function () {
    			context.drawImage(numberimages[min1],0,0);
    		};
    		var updatmin2 = function () {
    			context.drawImage(numberimages[min2],28,0);
    		};
    		var updatsec1 = function () {
    			context.drawImage(numberimages[sec1],73,0);
    		};
    		var updatsec2 = function () {
    			context.drawImage(numberimages[sec2],101,0);
    		};
    		var updatesemi = function () {
    			context.drawImage(numberimages[10],56,0);
    		}
    		//reset canvas
    		var resetcanvas = function () {
    			canvas.width = canvas.width;
    		};
    		//initialize timer
    		var initializer = function () {
    			if (imgarrayReady){
    				context.drawImage(numberimages[min1],0,0);
    				context.drawImage(numberimages[min2],28,0);
    				context.drawImage(numberimages[10],56,0);
    				context.drawImage(numberimages[sec1],73,0);
    				context.drawImage(numberimages[sec2],101,0);
    				initialized = true;
		    	}
    		};
    		//update timer
    		var updateTime = function () {
    			if (sec2 == 9 && sec1 == 5) {
    				sec1 = 0;
    				sec2 = 0;
    				min2 += 1;
    			}
    			else if (sec2 == 9){
    				sec2 = 0;
    				sec1 += 1;
    			}
    			else {
    				sec2 += 1;
    			}
    			if (min2 == 10){
    				min1 += 1;
    				min2 = 0;
    			}
				context.clearRect(0, 0, canvas.width, canvas.height);
    			resetcanvas();
    			updatsec2();
    			updatsec1();
    			updatesemi();
    			updatmin2();
    			updatmin1();
    		};

    		var main = function() {
    			if (initialized == false) {
    				initializer();
    			}
    			updateTime();
    		}

    		setInterval(main, 1000);