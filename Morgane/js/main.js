
var x = 0, y = 0;
var stepSize = 2;
//var strokeW = 1;

var params = {
  stepSize : 2,
  strokeW : 1,
  nbPoints : 3,
  reset : function(){
    background( 255 );
  }
};

//librairie dat.gui sur internet
var gui = new dat.GUI();
gui.add( params, "stepSize", 1, 40 ).step(1);
gui.add( params, "strokeW", 1, 30 );
gui.add( params, "nbPoints", 3, 60 ).step(1);
gui.add( params, "reset");


function setup() {

  createCanvas( 2480, 1748 );
  background( 255 );
  smooth();
  x = mouseX;
  y = mouseY;
  cursor( CROSS );


}

function draw() {

  if ( mouseIsPressed ) {
    var d = dist( x,y,mouseX,mouseY );

    //orientation de la forme
    if (d > stepSize) {
      var angle = atan2( mouseY-y, mouseX-x ); 

      push();
      translate(mouseX, mouseY);
      rotate(angle+PI);
      //rect(mouseX-x,mouseY-y,d,d);
      strokeWeight( params.strokeW );
      // ellipse(mouseX-x,mouseY-y,d,d);
      beginShape();
      for( var i = 0; i< params.nbPoints; i++){
        var _x = mouseX-x + cos( TWO_PI / params.nbPoints * i - PI / 2 ) * d;
        var _y = mouseY-y + sin( TWO_PI / params.nbPoints * i - PI / 2 ) * d;
        vertex( _x, _y );
      }
      endShape(CLOSE);      
      pop();

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
  stepSize = params.stepSize;
  //strokeWeight = params.strokeW;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW ){
    saveCanvas("000", "png");
    }

}