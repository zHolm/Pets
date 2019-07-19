import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

	getAllPets(){
		return this._http.get('/API/pets')
	}
	createPet(petd){
		console.log("httpservice pet data", petd)
		return this._http.post('/API/pets', petd)
	}
	getPet(pid){
		return this._http.get('/API/pets/'+pid)
	}
	deletePet(pid){
		return this._http.delete('/API/pets/'+pid)
	}
	updatePet(pid, data){
	console.log("httpservice update data: ", data)
		return this._http.put('API/pets/'+pid, data)
	}
	getPetByName(name){
		return this._http.get('/API/pets/name/'+name)
	}
	like(pid){
		return this._http.put('/API/pets/'+pid+"/like", pid)
	}
}
