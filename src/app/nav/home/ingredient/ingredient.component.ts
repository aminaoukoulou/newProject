import { Component, OnInit, Input } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';

import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ingredient } from 'src/app/Ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() Ingredient: ingredient;


  ingredient: { id: number; name: string; image: string; type: string; }[];
ingredientType;
  constructor(private ingredientService: IngredientsService, private activatedRoute: ActivatedRoute) {
    // this.toto = ingredientService.getAffiche();
   // this.activatedRoute.params.subscribe( params => console.log(params));
  }
  ngOnInit(): void {
     this.ingredientType = this.activatedRoute.snapshot.paramMap.get('type') ;
     this.ingredient = this.ingredientService.getList(this.ingredientType);
  }
 /*  ngOnInit(): void {
    this.getList();
  } */
 /*  getList(): void{
    const url : string = route.snapshot.url.join('type');
    this.ingredientService.getList(type).subscribe(ingredient => this.ingredient = ingredient); 
  } */

}
