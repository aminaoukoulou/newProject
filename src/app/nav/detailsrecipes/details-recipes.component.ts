import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';
import { Recipes, Recette } from 'src/app/Ingredient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-recipes',
  templateUrl: './details-recipes.component.html',
  styleUrls: ['./details-recipes.component.css']
})
export class DetailsRecipesComponent implements OnInit {
  detailsR: Recipes[];
  detailsName: any;
  recettes: Recette[];
  constructor(
    private ingredientService: IngredientsService,
    private activatedRoute: ActivatedRoute
  ) {}
  /*  getDetailsR() {
    this.ingredientService.getDetailsR().subscribe((detailsR: Recipes[]) => this.detailsR = detailsR);
  } */
  ngOnInit() {
    this.detailsName = this.activatedRoute.snapshot.paramMap.get('name');
   // this.detailsR = this.ingredientService.getDetailsR(this.detailsName);
    this.ingredientService
      .getRecette(this.detailsName)
      .subscribe((recettes: Recette[]) => (this.recettes = recettes));
  }
}
