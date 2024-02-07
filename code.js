///Canvas - fishing scene

//Canvas setup
var cnv = document.getElementById("myCanvas");
var contxt = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

///THE ORIGIN IS IN THE TOP LEFT CORNER. GOING DOWN THE Y VALUE INCREASES.

// top left corner is (0,0)
//top right corner is (400,0)
//bottom left corner is (0,400)
//bottom right corner is (400,400)

//Code below: allows a rectange to be shown by the coordinates given.

//SKY
contxt.fillStyle = "lightblue";
contxt.fillRect(0, 0, 400, 400);

//WATER
contxt.fillStyle = "blue";
contxt.fillRect(0, 235, 400, 200);

//PIER LANDING
contxt.fillStyle = "brown";
contxt.fillRect(0, 200, 250, 20);

// first two inputs of (.fillRect)are top left and right corner. The last two are the width and height

//PIER POST1
contxt.lineWidth = 10;
contxt.strokeStyle = "brown";

contxt.beginPath();
contxt.moveTo(10, 150);
contxt.lineTo(10, 400);
contxt.stroke();

//PIER POST2

contxt.beginPath();
contxt.moveTo(60, 150);
contxt.lineTo(60, 400);
contxt.stroke();

//PIER POST3

contxt.beginPath();
contxt.moveTo(110, 150);
contxt.lineTo(110, 400);
contxt.stroke();

//PIER POST4

contxt.beginPath();
contxt.moveTo(160, 150);
contxt.lineTo(160, 400);
contxt.stroke();

//SUN
contxt.fillStyle = "yellow";
contxt.beginPath();
//contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
contxt.arc(75, 50, 20, 0, 2 * Math.PI);
contxt.fill();

//fISH HEAD1
contxt.fillStyle = "pink";
contxt.beginPath();
contxt.arc(220, 300, 10, 0, 2 * Math.PI);
contxt.fill();

//FISH TAIL 1-----
contxt.beginPath();
contxt.moveTo(220, 300);
contxt.lineTo(240, 280);
contxt.lineTo(240, 320);
contxt.lineTo(220, 300);
contxt.fill();
//The first and last coordinates always match. The ones in middle control X and Y.

//FISH HEAD2
contxt.fillStyle = "lightgreen";
contxt.beginPath();
contxt.arc(300, 325, 10, 0, 2 * Math.PI);
contxt.fill();

//FISH TAIL 2-----
contxt.moveTo(300, 325);
contxt.lineTo(320, 340);
contxt.lineTo(320, 310);
contxt.lineTo(300, 325);
contxt.fill();

//stick man

//HEAD
contxt.strokeStyle = "black";
contxt.beginPath();
contxt.lineWidth = 3;
contxt.arc(250, 140, 15, 0, 2 * Math.PI);
contxt.stroke();

//TORSO
contxt.beginPath();
contxt.moveTo(248, 155);
contxt.lineTo(243, 195);
contxt.stroke();

///UPPER LEG
contxt.beginPath();
contxt.moveTo(243, 195);
contxt.lineTo(265, 205);
contxt.stroke();

//LOWER LEG
contxt.beginPath();
contxt.moveTo(265, 205);
contxt.lineTo(270, 230);
contxt.stroke();

//ARM
contxt.beginPath();
contxt.moveTo(246, 170);
contxt.lineTo(280, 180);
contxt.stroke(); //

//FISHING POLE
contxt.strokeStyle = "black";
contxt.lineWidth = 5;
contxt.beginPath();
contxt.moveTo(275, 190);
contxt.lineTo(350, 100);
contxt.stroke();

//FISHING LINE
contxt.lineWidth = 1;
contxt.beginPath();
contxt.moveTo(350, 100);
contxt.lineTo(350, 300);
contxt.stroke();

//CLOUD IMAGE
var cloudIMG = document.getElementById("cloudEL");
contxt.drawImage(cloudIMG, 145, 35, 90, 90);
contxt.drawImage(cloudIMG, 210, 25, 70, 70);
//first two cordinates of the image are the X and Y, last two are the height and width

//TEXT
contxt.font = "15px Arial";
contxt.fillStyle = "white";
contxt.fillText("Art by CW", 320, 385);
//coordinates for the text control the x and y values.
