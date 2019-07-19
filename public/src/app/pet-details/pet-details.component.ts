import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
	pet: any;
	pid: String;
	like2: Boolean;
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
		this.pet = {"name":"", "type":"", "desc":""}
		this.like2 = true
	}


	getThatPet(pid: String){
		let obs = this._httpService.getPet(pid)
		obs.subscribe(pet_d=>{
			this.pet = pet_d['data'][0]
			console.log("subscribed pet", this.pet)
		})
	}
	adopt(){
		let obs= this._httpService.deletePet(this.pid)
		obs.subscribe(adopted=>{
			console.log("goodbye: ", adopted)
			this.goHome()
		})
	}

	goHome(){
		this._router.navigate(['/pets'])
	}
	like(){
		let obs =this._httpService.like(this.pid)
		obs.subscribe(like=>{
			console.log("lile")
			this.getThatPet(this.pid)
			this.like2=false
		})
	}
}
