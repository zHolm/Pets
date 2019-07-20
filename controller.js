


const models = require('./models');

module.exports = {
	home: (req, res)=>{
		models.Pet.find({}, (err, pets)=>{
			if(err){console.log('can\'t find pets'); res.json({message: "Error", error: err})}
			else{
				res.json({message: "Success", data: pets})
			}
		}).sort({type: 'ascending'})
	},
	add: (req, res)=>{
		let pet = new models.Pet(req.body);
		console.log("hittng add route");
		pet.save((err)=>{
			if(err){console.log('not saved'); res.json({message:"Error", error: err})}
			else{
				console.log('pet saved to database');
				res.json({message: "Success", data: pet})
			}
		})
	},
	remove : (req, res)=>{
		models.Pet.remove({_id: req.params.id}, (err, data)=>{
			if(err){
				console.log("still here");
				res.json({message: "Error", error: err});
			} else {
				console.log("good-bye", req.params.id);	
				res.json({message: "good", data:data})
			}
		})
	},
	pet: (req,res)=>{
		models.Pet.find({_id: req.params.id}, (err, pet)=>{
			if(err){
				console.log("can't find pet");
				res.json({message: "Error", error:err})
			} else {
				console.log("Found it")
				res.json({message: "Success", data: pet})
			}
		})
	},
	update : (req,res)=>{
		models.Pet.update({_id: req.params.id}, {$set: req.body},{runValidators: true, context: 'query'}, (err, data)=>{
			if(err){
				console.log('not updated');
				res.json({message: "Error", error:err})
			}else{
				console.log('updated');
				res.json({message: "yes", data:data})
			}
	
		})
	},

	name: (req,res)=>{
		models.Pet.find({name: req.params.name}, (err, pet)=>{
			if(err){
				console.log("can't find pet");
				res.json({message: "Error", error:err})
			} else {
				console.log("Found it")
				res.json({message: "Success", data: pet})
			}
		})
	},
	 like: (req,res)=>{
		models.Pet.update({_id: req.params.id}, {$inc:{like: 1}},{runValidators: true}, (err, data)=>{
			if(err){
				console.log('not updated');
				res.json({message: "Error", error:err})
			}else{
				console.log('updated');
				res.json({message: "yes", data:data})
			}
	
		})
	},

}
//comment
