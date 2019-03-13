import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';

import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Ingredient } from 'src/app/Ingredient';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredient: Ingredient[];

  click: Ingredient;



 // ingredient: { id: number; name: string; image: string; type: string; }[];
  ingredientType;
  constructor(private ingredientService: IngredientsService, private activatedRoute: ActivatedRoute, private location: Location) {
  }
  ngOnInit(): void {
    this.ingredientType = this.activatedRoute.snapshot.paramMap.get('type');
    this.ingredientService.getIngredients(this.ingredientType).subscribe(
        (ingredient: Ingredient[]) => (this.ingredient = ingredient)
      );
  }

  Onclick(ingredient: Ingredient): void {
    this.click = ingredient;
    console.log('click');
  }

  goBack(): void {
    this.location.back();
  }


}
