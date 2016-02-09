//var cercle, cercle2, cercle3;

var cercles = [ ];
var nbParticules;

var params = {
  bgColor : "#FFFFFF",
  agentsColor:"#FF0000",
  agentsStroke:10
}

var positionx, positiony;
var directionx, directiony;

var carre = [];
var gui = new dat.GUI();
gui.add(params, 'agentsStroke' , 10, 100 ),
gui.addColor(params, 'bgColor'),
gui.addColor(params, 'agentsColor')


function setup(){
	background(params.bgColor);
	createCanvas(1748,2480);
	nbParticules = 50;
	// cercles.push( new Circle( random(width), random(height), 5));
	// cercles.push( new Circle( random(width), random(height), 5));
	// cercles.push( new Circle( random(width), random(height), 5));
	// console.log(cercles.lenght);
	//cercle = new Circle( width, height, 150);
	//cercle2 = new Circle( width/2 , height/2 , 150);
	//cercle3 = new Circle( width , 0 , 150 );
	// var index = 0;
	// while (index<300){
	// 	cercles.push( new Circle ( random( width ) , random( height ) , 5 ));
	// 	index ++;
	// 	console.log( index );
	// }

	for (var i = 0; i < nbParticules; i++) {
			cercles.push( new Circle( random(-width,width) , -150 , 10* noise(0.1), frameCount/10 )); //variation de noise sur deux axes

	}


	console.log(cercles.length);

	if(keyIsPressed === true){
		setup();
	}
}

function draw(){

	noStroke();
	fill(0);
/*	cercle.display();
	cercle.move();
	cercle.grow();
	fill(255,0,0);
	cercle2.display();
	cercle2.move();
	cercle2.grow();
	fill(0,0,255);
	cercle3.display();
	cercle3.move();
	cercle3.grow();*/

	// cercles[0].display();
	// cercles[1].display();
	// cercles[2].display();
for(var index = 0; index < cercles.length; index ++){
		cercles[index]. update();
		cercles[index]. display();
		cercles[index]. move();



			}

}



var Circle = function( _x, _y, _diameter ){
	this.x = _x;
	this.y = _y;
	this.diameter = _diameter;
	this.nx=0;
	this.ny=0;

	 //faire référence à l'objet que l'on cré
}; //point virgule en fin de variable

Circle.prototype.display = function(){
	
	push();
	translate(this.nx*200, this.ny*200);
    ellipse( this.x, this.y, this.diameter, this.diameter );
	pop();
};

Circle.prototype.move= function(){
	this.x = this.x + this.nx; //Math.random()*2-1
	this.y = this.y + this.ny;
};



Circle.prototype.update = function() {
	this.nx = noise( this.x / 100, this.y / -100, frameCount/500);
	this.ny = noise( this.x / 100, this.y / -100, frameCount/5000);
	this.diameter = params.agentsStroke;
}

function keyPressed() {

  saveCanvas("export","png");
}