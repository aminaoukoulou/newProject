import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';
import { Recipes } from 'src/app/Ingredient';

@Component({
  selector: 'app-details-recipes',
  templateUrl: './details-recipes.component.html',
  styleUrls: ['./details-recipes.component.css']
})
export class DetailsRecipesComponent implements OnInit {
  detailsR: Recipes[];
  constructor(private ingredientService: IngredientsService) { }
  getDetailsR() {
    this.ingredientService.getDetailsR().subscribe((detailsR: Recipes[]) => this.detailsR = detailsR);
  }
  ngOnInit() {
    this.getDetailsR();
  }

}
