//Create a reference for canvas 
canvas = document.getElementById("CanvasMY2");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
marooncar_width = 75;
marooncar_height = 125;

background_image = "parkingLot.jpg";
marooncar_image = "PARKING ARENA.png";

//Set initial position for a car image.
marooncar_x = 5;
marooncar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	marooncar_imgTag = new Image();
	marooncar_imgTag.onload = uploadmarooncar;
	marooncar_imgTag.src = marooncar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadmarooncar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(marooncar_imgTag, marooncar_x,marooncar_y, marooncar_width, marooncar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
    if(marooncar_y >=38)
	{

       marooncar_y = marooncar_y - 10;
       console.log("when up arrow is pressed,  x = " + marooncar_x + " | y = " + marooncar_y);
	   uploadBackground();
	   uploadmarooncar();
}  

    }

function down()
{
	//Define function to move the car downward
	if(marooncar_y >=40)
	{

       marooncar_y = marooncar_y + 10;
       console.log("when down arrow is pressed,  x = " + marooncar_x + " | y = " + marooncar_y);
	   uploadBackground();
	   uploadmarooncar();
}  

    }

function left()
{
	//Define function to move the car left side
	if(marooncar_y >=37)
	{

       marooncar_x = marooncar_x - 10;
       console.log("when left arrow is pressed,  x = " + marooncar_x + " | y = " + marooncar_y);
	   uploadBackground();
	   uploadmarooncar();
}  

    }

function right()
{
	//Define function to move the car right side
	if(marooncar_y >=39)
	{

       marooncar_x = marooncar_x + 10;
       console.log("when right arrow is pressed,  x = " + marooncar_x + " | y = " + marooncar_y);
	   uploadBackground();
	   uploadmarooncar();
}  

    }
