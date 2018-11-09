import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './nav/categories/categories.component';
import { RecettesComponent } from './nav/recettes/recettes.component';
import { DetailsRecipesComponent } from './nav/detailsrecipes/details-recipes.component';
import { IngredientComponent } from './nav/categories/ingredient/ingredient.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'categories', component: CategoriesComponent},
  {path: 'recettes', component: RecettesComponent},
  {path: 'detailsrecipes', component: DetailsRecipesComponent},
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
