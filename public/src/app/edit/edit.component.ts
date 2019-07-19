import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	ePet: any;
	pid: String;
  constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router
  ) { }

  	ngOnInit() {
    	this._route.params.subscribe((params: Params) => {
			this.pid=params['id']
			console.log(this.pid, " is pet id")
 	 	})
		this.getThatPet(this.pid)
		this.ePet = {"name":"", "type":"", "desc":""}
	}


	getThatPet(pid: String){
		let obs = this._httpService.getPet(pid)
		obs.subscribe(pet_d=>{
			this.ePet = pet_d['data'][0]
			console.log("subscribed pet", this.ePet)
		})
	}
	editPet(){
		let obs = this._httpService.updatePet(this.pid, this.ePet)
		obs.subscribe(editedP=>{
			console.log("editPET", editedP)
			if(editedP['message'] != "Error") this.goToDetails()
		})
	}
	goToDetails(){
		this._router.navigate(['/pets/'+this.pid])
	}

}
