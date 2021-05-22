const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');


const PlayerSchema = new Schema({
	name: {
		type: String,
	},
	position: {
		type: String,
	},
	nationality: {
		type: String,
	},
	team: {
		type: String,
	}

})

PlayerSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('players', PlayerSchema);