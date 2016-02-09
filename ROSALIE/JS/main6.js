
var params = {
	bgColor:"#000000",
	taillecarre: 20,
	ecartvertical: 20,
	ecarthorizontal: 20,  
	speed : 50,
	carreCouleur: "#FFFFFF"
};

var gui = new dat.GUI();
gui.add(params, 'taillecarre', 1, 30);
gui.add(params, 'ecartvertical', 1, 70);
gui.add(params, 'ecarthorizontal', 1, 70);
gui.addColor(params, 'bgColor', 10, 40);
gui.addColor(params, 'carreCouleur', 0, 100);
gui.add(params, 'speed', 10, 300);



var agents=[];


function setup(){
	createCanvas(420, 592);

	initialize();

	/*
	var y =0;
	while(y<height){
	y=y+20;
	}
	*/
}


function initialize(){
	agents =[];

	  for(var x=0; x<width; x+= params.ecartvertical){
	   	for(var y=0; y<height; y= y+ params.ecarthorizontal){
	   		agents.push(new Agent(x,y,params.taillecarre));
	   	}
	}

}

function draw(){
	background(params.bgColor);

	fill(params.carreCouleur);

	stroke(0);
	for(var index=0; index < agents.length; index++){
	agents[ index ].update();
	strokeWeight(agents [index].n*1)
	agents[ index ].display();

	}
}

var Agent = function (_x, _y, _w){ //w=largeur
	this.x= _x;
	this.y= _y;
	this.w= _w; //taille
	this.n= 0; //noise pour angle de rotation
}

Agent.prototype.update=function(){
	this.n=noise(this.x/150, this.y/150, frameCount/params.speed);
};

Agent.prototype.display=function(){
	push();
		translate (this.x + this.w/2, this.y + this.w/2);

		if(this.n<mouseX / width ){
			rect(10 - this.w/2, 10 - this.w/2, this.w, this.w);
			// ellipse ( 0, 0, this.w, this.w);
		}

		else{
			rect(0 - this.w/2, 0 - this.w/2, this.w, this.w);
		}
	pop();
};


function mousePressed(){
	// params.agentw= random(10, 100);
	// params.ecart = int( random(10,40));
	initialize();
}

function keyPressed(){
	if( keyCode == LEFT_ARROW ){
		saveCanvas("export","png");	
	}
}