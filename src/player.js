const MovingObject = require("./moving_object");
const Utils = require("./utils");

class Player extends MovingObject {

	constructor() {
		super({pos:[600,110], radius:15})
		this.height = 40;
		this.width = 32;
		this.radius = 15


		this.imageArray = [];

		this.direction = 8;
		this.idx = 0;


		// this.cece_sheet = Utils.loadImg('./images/cece/rpg-maker-sprites-and-facial-expression-sets-3e26.png');
		// this.cece_sheet_pos = 
		// 	[[300,145], [332, 145], [365,145], [397, 145],
		// 	[300,48],   [332, 48],  [365,48],  [397, 48],
		// 	[300,0],    [332, 0],   [365,0],   [397, 0],
		// 	[300,96],   [332, 96],  [365,96],  [397, 96]];
	}

	getDirection() { return this.direction; };

	getPos() { return this.pos; };


	center() {
 		return [this.pos[0] + 15, this.pos[1] + 15];
	}




	// switches image for walking animation
	switchImage() {
		if (this.idx === 3) this.idx = 0;
		else this.idx++;
	}
	

	drawObject(ctx) {





		// ctx.drawImage(this.cece_sheet,
		// 	this.cece_sheet_pos[this.direction + this.idx][0],
		// 	this.cece_sheet_pos[this.direction + this.idx][1],
		// 	32,
		// 	48,
		// 	this.pos[0],
		// 	this.pos[1],
		// 	this.width,
		// 	this.height);
			

	};


	move(ctx) {};



}

module.exports = Player;