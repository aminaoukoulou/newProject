import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './nav/home/home.component';
import { ImagesComponent } from './nav/images/images.component';
import { LocationsComponent } from './nav/locations/locations.component';
import { LoginComponent } from './nav/login/login.component';

import { IngredientComponent } from './nav/home/ingredient/ingredient.component';
import { HeaderComponent } from './header/header.component';


export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'locations', component: LocationsComponent},
  { path: 'ingredient/:type', component: IngredientComponent },


];
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
