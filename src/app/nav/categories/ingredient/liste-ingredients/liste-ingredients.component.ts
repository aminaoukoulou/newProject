import { Component, OnInit, Input } from '@angular/core';
import { ingredient, ingredientsType } from 'src/app/Ingredient';
import { IngredientComponent } from '../../ingredient/ingredient.component';

@Component({
  selector: 'app-liste-ingredients',
  templateUrl: './liste-ingredients.component.html',
  styleUrls: ['./liste-ingredients.component.css']
})
export class ListeIngredientsComponent implements OnInit {

  @Input() Ingredient: ingredient[];



  constructor() { }

  ngOnInit() {
  }

}
