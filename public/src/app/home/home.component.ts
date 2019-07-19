import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	pets: any;	

	constructor(private _httpService: HttpService) { }

	ngOnInit() {
		this.allPets();
	}

	allPets(){
		let obs= this._httpService.getAllPets();
		obs.subscribe(pets=>{
			this.pets = pets['data']
			console.log("this.pets home.ts", this.pets)
		})
	}
}
