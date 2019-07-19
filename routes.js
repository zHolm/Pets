
var path = require("path")
const controller = require("./controller");

module.exports = (app) =>{
	app.get('/API/pets', controller.home)
	app.post('/API/pets/', controller.add)
	app.get('/API/pets/:id/', controller.pet)
	app.put('/API/pets/:id/', controller.update)
	app.put('/API/pets/:id/like', controller.like)
	app.delete('/API/pets/:id', controller.remove)
	app.get('/API/pets/name/:name', controller.name)
	app.all("*", (req,res,next) => {
 		res.sendFile(path.resolve("./public/dist/public/index.html"))
	});
}
