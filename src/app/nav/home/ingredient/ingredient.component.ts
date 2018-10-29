import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';

import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ingredient } from 'src/app/Ingredient';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  Ingredient: ingredient;

  click: ingredient;



  ingredient: { id: number; name: string; image: string; type: string; }[];
  ingredientType;
  constructor(private ingredientService: IngredientsService, private activatedRoute: ActivatedRoute, private location: Location) {
  }
  ngOnInit(): void {
    this.ingredientType = this.activatedRoute.snapshot.paramMap.get('type');
    this.ingredient = this.ingredientService.getList(this.ingredientType);

  }

  Onclick(Ingredient: ingredient): void {
    this.click = Ingredient;
    console.log('click');
  }

  goBack(): void {
    this.location.back();
  }


}
