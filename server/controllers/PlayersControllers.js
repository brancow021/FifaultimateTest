const PlayerModel = require("../models/PlayerModel");

// LIST PLAYERS BY NAME
exports.listPlayersName = (req, res) => {
	let { search = "", order = "asc", page = 1 } = req?.query;
	let perPage = 24;
	let pageRes = Math.max(parseInt(page));
	let options = {
		page: pageRes,
		limit: perPage,
		sort: { name: order === "asc" ? 1 : -1 },
	};
	
	PlayerModel.paginate({name: {$regex: new RegExp(search), $options: 'i'}}, options)
		.then((player) => {
			res.json({
				Page: player.page,
				TotalPages: player.totalPages,
				Items: player.pagingCounter,
				totalItems: player.totalDocs,
				Players: player.docs,
			});
		})
		.catch((err) => console.log(err));
};

// LIST PLAYERS THEIR TEAM
exports.listPlayersNameTeam = (req, res) => {
	let {name, page = 1 } = req?.body;
	let perPage = 24;
	let pageRes = Math.max(parseInt(page));

	let options = {
		page: pageRes,
		limit: perPage,
	};
	
	PlayerModel.paginate({team: {$regex: new RegExp(name), $options: 'i'}}, options)
		.then((player) => {
			res.json({
				Page: player.page,
				TotalPages: player.totalPages,
				Items: player.pagingCounter,
				totalItems: player.totalDocs,
				Players: player.docs,
			});
		})
		.catch((err) => console.log(err));
};
