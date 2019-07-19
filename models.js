


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/pet_db');
var uniqueValidator = require('mongoose-unique-validator');


const PetSchema = new mongoose.Schema(
		{	
			name: {
				type: String, 
				required: [true, "A pet needs a name"], 
				minlength:[3, "name needs to be 3 characters"],
				unique: true
			},

			type: {
				type: String, 
				required: [true, "A pet needs a type"], 
				minlength:[3, "type needs to be atleast 3 characters"]
			},
			desc: {
				type: String, 
				required: [true, "A pet needs a description"], 
				minlength:[3, "description needs to be atleast 3 characters"]
			},
			skill1: {
				type: String, 
			},

			skill2: {
				type: String, 
			},

			skill3: {
				type: String, 
			},
			like: {
				type: Number,
				default:0,
			}
		},
			{timestamps: true}
);

mongoose.model('Pet', PetSchema);
var Pet = mongoose.model('Pet')
PetSchema.plugin(uniqueValidator)
module.exports = {
	Pet: Pet,
}
