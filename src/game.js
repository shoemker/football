
const Utils = require("./utils");
const Player = require("./player");

class Game {

	constructor(){
		this.players = [];

	}

	

	add(object) {
		if (object instanceof Player){
			this.players.push(object);
		}


	}


	draw(ctx) {
		
		ctx.clearRect(0, 0, Utils.getCanvasDim().x, Utils.getCanvasDim().y);
		
	

	}




	step() {
		this.moveObjects();
	}


	moveObjects() {
		this.players.forEach(player => { player.move(); });
		// if (this.fireball) this.fireball.move(4);
	}
}


module.exports = Game;