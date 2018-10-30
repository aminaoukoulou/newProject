import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './nav/categories/categories.component';
import { RecettesComponent } from './nav/recettes/recettes.component';
import { LocationsComponent } from './nav/locations/locations.component';
import { IngredientComponent } from './nav/categories/ingredient/ingredient.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'categories', component: CategoriesComponent},
  {path: 'recettes', component: RecettesComponent},
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
