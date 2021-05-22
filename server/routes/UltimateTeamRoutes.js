const express = require("express");
const { listPlayersName, listPlayersNameTeam } = require("../controllers/PlayersControllers");


class UltimateTeamRoutes{
	router = express.Router();

	constructor(){
		this.router = express.Router();
		this.routes();
	}

	routes(){
		this.router.post("/api/v1/team", listPlayersNameTeam);
		this.router.get("/api/v1/players", listPlayersName);
	}
}

const ultimateTeamRoutes = new UltimateTeamRoutes();

module.exports = ultimateTeamRoutes.router;