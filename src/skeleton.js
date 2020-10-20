
const Enemy = require("./enemy");

class Skeleton extends Enemy {
	constructor(options) {
		super(options);

		this.skelImg = options.img;
		this.directionDuration = 10;
		this.directionCount = 0;

		this.hitPoints = 1;
		this.height = 30;
		this.width = 30;

	}


	drawObject(ctx) {

		let x;
		let y;
		if (this.deltaX >= 0) {
			x = 420;
			y = 150;
		} else {
			x = 420;
			y = 120;
		}

		ctx.drawImage(this.skelImg, x, y, 15, 15,
			this.pos[0],
			this.pos[1],
			this.width,
			this.height);

		super.drawObject(ctx);

	}
}



module.exports = Skeleton;