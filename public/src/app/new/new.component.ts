import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	newPet: any;
	oldpet: any;
	error:any; 
  constructor(private _router: Router, private _httpService: HttpService) { }

  ngOnInit() {
  	this.newPet = {"name":"","type":"", "desc":"", "skill1":"", "skill2":"", "skill3":""}
  }
  createPet(){
		console.log("WElcome new pet new.ts", this.newPet)
		let obs = this._httpService.createPet(this.newPet)
		obs.subscribe(newpetD=>{
			console.log("subscribe new pet", newpetD)
			this.error = newpetD
			if(this.error.message=="Error"){this.error="name already taken"}
			else{
			this.goHome()
			}
		})
  	
  }
  goHome(){
  	this._router.navigate(['/pets'])
  }


}
