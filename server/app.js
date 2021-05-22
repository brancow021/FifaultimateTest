const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const envConfig = require("../envConfig");
const cors = require("cors");

class Server {
	constructor() {
		this.app = express();
		this.serverStart();
		this.initDatabase();
		this.initMiddlewares();
		this.routes();
	}

	initDatabase() {
		mongoose
			.connect(`mongodb://${envConfig.DATABASE}`, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useFindAndModify: true,
				useCreateIndex: true,
			})
			.then(() => console.log(`¡Conexion a base de datos exitosa!`))
			.catch((err) => console.log("Ocurrio un error al conectar a la base de datos", err));
	}

	initMiddlewares(){
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(cors());
	}

	routes(){
		this.app.use(require('./routes/UltimateTeamRoutes'))
	}

	serverStart() {
		this.app.listen(envConfig.PORT, () => {
			console.log("Servidor corriendo en el puerto" + envConfig.HOST, envConfig.PORT);
		});
	}
}

const server = new Server();

module.exports = server;
