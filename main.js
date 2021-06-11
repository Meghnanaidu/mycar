canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

function add() {
background_imgTag = new Image(); //defining a variable with a new image
background_imgTag.onload = uploadBackground; // setting a function, onloading this varable
background_imgTag.src= background_imgTag; // load image

car1_imgTag = new Image(); //defining a variable with a new image
car1_imgTag. onload = uploadercar1; // setting a function, onloading this variable
car1_imgTag.src = car1_imgTag; // load image

}

car1_width = 120;
car1_height = 70;
car1_image = "Mclaren_PNG78.png"
car1_x = 10;
car1_y = 10;

car1_width = 120;
car1_height = 70;
car1_image =   "http://purepng.com/public/uploads/large/purepng.com-mclaren-p1-gtr-race-carcarcarsvehiclevehiclestransport-561521126045aax0c.png"
car1_x = 10;
car1_y = 100;

background_image = "050420_kc_dwarf-galaxy_feat-1028x579"

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadercar1() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}   
    

window.addEventListener("keydown", my_keydown);

function my_keydown(e)

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')



{
    car1_up();
    console.log("up arrow key");
}


if(keyPressed == '40')



{
    car1_down();
    console.log("down arrow key");
}

if(keyPressed == '37')



{
    car1_left();
    console.log("left arrow key");
}

if(keyPressed == '39')



{
    car1_right();
    console.log("right arrow key");
}

if(keyPressed == '87')



{
    car2_up();
    console.log(" key w");
}