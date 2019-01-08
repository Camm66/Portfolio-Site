var font,
  fontsize = 50;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('../vendors/fonts/TitilliumWeb-Regular.ttf');
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
    var canvas = createCanvas(250, 250);
    canvas.parent("logo");

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {

    //Set letter location
    var x = 50;
    var y = 0;

    // Set the gap between letters and the left and top margin
    var xGap = 40;
    var yGap = 30;
    
    var margin = 10;
    translate(margin * 2, margin * 2);
    
    //Letter C
    //letters by their Unicode number
    var letterC = char(67);
    fill('#b10235');
    // Draw the letter to the screen
    text(letterC, x, y);
    
    fill('#3c3c3c');
    text(letterC, x+1, y+1);
        
    //Letter M
    var letterM = char(77);
    fill('#b10235');
    text(letterM, x + xGap, y + yGap);
    fill('#3c3c3c');
    text(letterM, x + xGap + 1, y + yGap+ 1);
}