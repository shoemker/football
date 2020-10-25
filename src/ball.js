const MovingObject = require("./moving_object");

class Ball extends MovingObject {

	constructor(options) {
		super(options);
		this.img = options.img;
	}

	center() {
		return [this.pos[0] + 7, this.pos[1] + 7];
	}

	drawObject(ctx) {
		ctx.drawImage(this.img, 0, 0, 220, 220, this.pos[0], this.pos[1], this.radius, this.radius);

	}

	move() {
		// debugger
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
	}


}

module.exports = Ball;