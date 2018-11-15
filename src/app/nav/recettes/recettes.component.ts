import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';
import { Recipes } from 'src/app/Ingredient';


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  detailsR: Recipes[];
  constructor(private ingredientService: IngredientsService) {  }

 getDetailsR() {
   this.ingredientService.getDetailsR().subscribe((detailsR: Recipes[]) => this.detailsR = detailsR);
 }

  ngOnInit() {
   this.getDetailsR();
 }
}
