const Game = require("./game");
const Player = require("./player");


class GameView {
 
	constructor(ctx){

		this.ctx = ctx;
		this.game = new Game();

		this.Player = this.game.add(new Player);

	};




	start() {
		this.bindKeyHandlers();

		// start the animation
		requestAnimationFrame(this.animate.bind(this));
	};


	animate() {

		this.game.step();

		this.game.draw(this.ctx);

		// every call to animate requests causes another call to animate
		requestAnimationFrame(this.animate.bind(this));
	};



	bindKeyHandlers() {
		
		const dist = 15;

		const MOVES = {
			w: [0, -dist],
			a: [-dist, 0],
			s: [0, dist],
			d: [dist, 0] }

		const that = this;
		
		Object.keys(MOVES).forEach((ele) => {
			key(ele, () => { that.cece.move(MOVES[ele], this.game.opening); })
		});

		key("space", () => { 

		});
	}
}

module.exports = GameView;