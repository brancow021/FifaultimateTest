const node_fetch = require("node-fetch");
const PlayerModel = require("./server/models/PlayerModel");
const initDatabase = require("./server/app");
const envConfig = require("./envConfig");

class UploadDatabase {
	constructor() {
		initDatabase.initDatabase();
		this.URL = "https://www.easports.com/fifa/ultimate-team/api/fut/item";
		this.getDataPlayers();
		this.players = [];
	}

	async getDataPlayers() {
		
		try {
			await PlayerModel.deleteMany({});
			let response = await this.getPlayers().then((res) => res.json());
			let numberpages = response?.totalPages;

			for (let index = 1; index < 10; index++) {
				let data = await this.getPlayers(index).then((res) => res.json());

				data.items.map((data) => {
					this.players.push({
						name: data?.name,
						position: data?.position,
						nationality: data?.nation.name,
						team: data?.club.name,
					});

					console.warn(
						"Almacenando los datos en la base de datos...",
						data?.name
					);
				});

				PlayerModel.insertMany(this.players)
					.then(() => {
						console.warn("¡Datos almacenados correctamente!");
					})
					.catch((err) => {
						console.log(err);
						// process.exit();
					});
			}

			console.log("Fin del Script");
			// process.exit();
		} catch (err) {
			console.log(err);
		}
	}

	async getPlayers(page = 0) {
		let response;

		try {
			response = await node_fetch(`${this.URL}?page=${page}`);
		} catch (error) {
			console.log(error);
		}

		return response;
	}

	serverStart() {
		this.app.listen(envConfig.PORT, () => {
			console.log("Servidor corriendo en el puerto", envConfig.PORT);
		});
	}
}

new UploadDatabase();
