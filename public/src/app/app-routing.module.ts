import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
	{path: 'pets', component: HomeComponent},
	{path: 'pets/new', component: NewComponent},
	{path: 'pets/:id', component: PetDetailsComponent},
	{path: 'pets/:id/edit', component: EditComponent},
	{path: '', pathMatch: 'full', redirectTo: '/pets'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
