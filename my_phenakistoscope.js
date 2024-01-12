const SLICE_COUNT = 15;


//colours
let darkOrange = 'rgb(209, 79, 65)';
let orange = 'rgb(214,109,77)';
let beige = 'rgb(233,222,192)';
let yellow = 'rgb(232,190,114)';
let darkYellow = 'rgb(195,145,46)';
let blue = 'rgb(100,187,179)';
let darkBlue = 'rgb(32,89,132)';
let pink = 'rgb(212,147,169)';
let black = 'rgb(26,26,28)';
let red = 'rgb(255,0,0)';

function setup_pScope(pScope){
  
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(false);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  

  //Background layer
  var layer2 = new PLayer(squaress);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
  
  //Person layer
  var layer1 = new PLayer(person);
  layer1.mode( SWIRL(1));
  layer1.set_boundary( 200, 1000 );

  //Cannon layer
  var layer2 = new PLayer(cannon);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function person(x, y, animation, pScope){
  push ();

  //Initial setup
  translate (-5+animation.frame*200,-100); // so man flys in a diagonal line
  rotate (10);
  scale (0.5+animation.frame*2); // increases in size as it goes along

  //THE MAN CODE

  //hands
  fill (pink);
  ellipse (-75,-300, 40, 40);
  ellipse (75,-300, 40, 40);
  arc (-75,-300, 30, 30, 300, 0);
  arc (75,-300, 30, 30, 300, 0);
  arc (-75,-300, 20, 20, 300,0);
  arc (75,-300, 20, 20, 300,0);

  //Sleaves
  fill(black);
  rect (-100,-300, 50, 10);
  rect (50,-300, 50, 10);
  
  //The lines on suit
  fill(blue);
  noStroke();
  let xx, yx;  

  for (let i=0;i<20;i++){ //draws 19 stripes on the suit
    if (i%2==0){ //every second one is beige
      fill(beige);
    }else{
      fill(blue); //every other one is blue
    }
    if (i<6 || i>13){ //the first 6 and last 6 are longer, and reach the end of the arms
      beginShape();
      xx = -100+10*i;
      yx = -20+2*i;
      vertex (xx,-290);
      vertex (xx+10,-290);
      vertex (yx+2,50);
      vertex (yx,50);
      endShape();
      
      stroke(1);
      line(xx,-290, yx,50); //between each colour is a black line

    } else{ //the middle 7 are shorter, and only have to reach to the head
      noStroke();
      beginShape();
      xx = -80+8*i;
      yx = -20+2*i;
      vertex (xx,-200);
      vertex (xx+15,-200);
      vertex (yx+2,50);
      vertex (yx,50);
      endShape();

      stroke(1);
      line(xx, -200,yx,50); //between each colour is a black line
    }
  }

  fill(black);
  arc ( -10, 50, 20, 20, 0, 180); //left foot
  arc ( 10, 50, 20, 20, 0, 180); //right foot
  arc (-70,-290, 60, 10, 0, 180); //left sleave
  arc (70,-290, 60, 10, 0, 180); //right sleave
  arc (-70,-290, 60, 10, 180, 0); //left sleave
  arc (70,-290, 60, 10, 180, 0); //right sleave

  //The Tie
  fill (beige);
  triangle (0, -60, -30, -200, 30, -200); //draw the shirt under the tie
  fill (darkOrange);
  beginShape(); //The tie
  vertex (0, -160);
  vertex (10, -145);
  vertex (2, -135);
  vertex (10, -110);
  vertex (0, -60);
  vertex (-10, -110);
  vertex (-2, -135);
  vertex (-10, -145);
  vertex (0, -160);
  endShape();
  line(0,-160,-16,-137); //left collar
  line(0,-160,16,-137); //right collar

  
 
  //THE FACE OF MAN
  translate (0,-200);
  scale(0.5);

  //draw head
  fill (pink);
  ellipse(0,0,150,200); 

  //lips
  arc (0,70,50,15,0,180);
  arc (0,70,50,15,180,360);
  arc (0,62,10,7,0,180);
  line (-25,70,25,70);
  fill (beige);
  ellipse (0,70, 45,3);

  //nose and brow
  fill (black);
  arc (35, -20, 40, 15, 180, 0);
  arc (-35, -20, 40, 15, 180, 0);
  fill (pink);
  arc (0, 40, 20, 15, 0,180);
  arc (-5,40,10,10,100,260);
  line (10, -20, 10, 40);

  //eyes
  fill (beige);
  arc (37,0, 25,10, 0,180);
  arc (-37,0, 25,10, 0,180);
  arc (37,0, 25,10, 180,0);
  arc (-37,0, 25,10,180,0);

  fill (blue);
  ellipse (37,0, 10,10);
  ellipse (-37,0, 10,10);

  fill (black);
  ellipse (37,0, 5,5);
  ellipse (-37,0, 5,5);

  //hair
  fill (black);
  arc (0,-60, 130, 20, 0,180);
  arc (0,-58, 130, 85, 180,0);
  arc (-75,-30, 30, 100, 285,90);
  arc (75,-30, 30, 100,90, 255);

  //hair wavy bits
  noStroke();
  triangle(-75,-30+10*animation.wave(), -60,-60, -80-20*animation.wave(),-80+50*animation.wave());
  triangle(75,-30+10*animation.wave(), 60,-60, 80+10*animation.wave(),-80+20*animation.wave());
  triangle(-65,-60, -80+20*animation.wave(),-70-30+10*animation.wave(), 0,-60);
  triangle(65,-60, 80-20*animation.wave(),-70-30-10*animation.wave(), 0,-60);
  triangle(-50,-85, -40-20*animation.wave(),-100-30+10*animation.wave(), 0,-60);
  triangle(50,-85, 40-20*animation.wave(),-90-30-20*animation.wave(), 0,-60);
  triangle(-20,-100, 0-20*animation.wave(),-100-30+10*animation.wave(), 30,-60);
  pop ();
  stroke(1);
}

function cannon(x, y, animation, pScope){
  //Initial setup
  push()
  stroke(black);
  strokeWeight(2);  
  fill(255, 255, 255);
  scale(0.6);
  translate(-10,-500);
  rotate (100);

  //THE CANNON CODE

  fill(darkOrange);
  ellipse (0+30*animation.wave(),-45, 50,50); //back wheel
  rect (-5+30*animation.wave(),-55,70,30);

  fill (orange);
  ellipse (-10+30*animation.wave(),0, 180+10*animation.wave(),150-50*animation.wave()); //base of cannon

  //triangle decor
  fill (yellow);
  noStroke();
  triangle (-80+30*animation.wave(),40-40, 30*animation.wave()
    ,40+15*animation.wave()-100, -100+30*animation.wave(),-40+5*animation.wave());
  triangle (-100+30*animation.wave(),40-10*animation.wave(), 30*animation.wave()
    ,40-15*animation.wave()+20, -100+30*animation.wave(),-10);
  triangle (-100+30*animation.wave(),-20, 20+30*animation.wave()
    ,0, -100+30*animation.wave(),20);

  //Cannon's rim
  stroke(1);
  fill (darkOrange);
  rect ( -100+30*animation.wave(),-50, 15,100);
  arc (-87+30*animation.wave(),0, 40,100, 270,90);
  fill (orange);
  arc (-100+30*animation.wave(),0, 30,100, 90,270);
  arc (-100+30*animation.wave(),0, 40,100, 270,90);
  fill(darkOrange);
  arc (-100+30*animation.wave(),0, 20,80, 90,270);
  arc (-100+30*animation.wave(),0, 20,80, 270,90);

  fill (darkOrange);
  ellipse (50+30*animation.wave(),-50, 50,50); //front wheel

  pop(); 
}

function squaress(x, y, animation, pScope){
  //Initial setup
  push();
  noStroke();

  //THE BACKGROUND CODE
  fill (beige);
  arc (0,0, 2000,2000, 258,282); //background beige circle
  fill(red);
  arc (0,0, 2000,2000, 258,265); //left red line
  arc (0,0, 2000,2000, 275,282); //right red line
  fill (beige);
  arc (0,0, 500,500, 258,282); //bottom beige circle

  //STARS

  //biggest star at the bottom
  fill (red);
  translate (0,-200);
  scale (0.5);
  rotate (180);
  translate (0,animation.wave()*10);
  star(); //first red layer
  fill (beige);
  scale(0.6);
  star(); //second beige layer
  fill (red);
  scale(0.6);
  star(); //third red layer
  pop();

  //second biggest star
  push();
  noStroke();
  fill (red);
  translate (0,-130);
  translate (0,animation.wave()*7);
  scale(0.3);
  rotate (180);
  star(); //first red layer
  fill (beige);
  scale(0.6);
  star();  //second beige layer
  fill (red);
  scale(0.6);
  star(); //third red layer
  pop();

  //third biggest star
  push();
  noStroke();
  fill (red);
  translate (0,-80);
  translate (0,animation.wave()*-3);
  scale(0.18);
  rotate (180);
  star(); //first red layer
  fill (beige);
  scale(0.6);
  star(); //second beige layer
  fill (red);
  scale(0.6);
  star(); //third red layer
  pop();

  //fourth biggest star
  push();
  noStroke();
  fill (red);
  translate (0,-40);
  scale(0.1);
  rotate (180);
  star(); //first red layer
  fill (beige);
  scale(0.6);
  star(); //second beige layer
  fill (red);
  scale(0.6);
  star(); //third red layer
  pop();

  //Top Spinning Star
  push();
  noStroke();
  fill (red);
  translate (0, -900);
  scale(0.8);
  rotate ((360/SLICE_COUNT)*animation.frame*15); //rotate the star to spin
  star(); //first red layer
  fill (beige);
  scale(0.6);
  star(); //second beige layer
  fill (red);
  scale(0.6);
  star(); //third red layer
  fill (beige);
  scale(0.6);
  star(); //fourth beige layer
  pop();
}

/**
 * Draws a star
 */
function star(){
  beginShape(); //create star
  vertex (0,100);
  vertex (22,30);
  vertex (95,30);
  vertex (36,-20);
  vertex (65,-90);
  vertex (0,-50);
  vertex (-65,-90);
  vertex (-36,-20);
  vertex (-95,30);
  vertex (-22,30);  
  endShape();
}


