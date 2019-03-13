import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';
import { Recipes, Recette } from 'src/app/Ingredient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  detailsR: Recipes[];
  Recipes: string;
  recettes: Recette[];
  constructor(private ingredientService: IngredientsService, private activatedRoute: ActivatedRoute, private router: Router) {  }

  getDetailsR() {
    this.ingredientService
      .getRecettes()
      .subscribe((recettes: Recette[]) => (this.recettes = recettes));
   // this.ingredientService.getRecettes().subscribe((detailsR: Recipes[]) => this.detailsR = detailsR);
 }


  ngOnInit() {
   this.getDetailsR();
  }

/*  SelectRecipe() {
const name = this.router.snapshot.paramMap.get('name');
   this.router.navigate(['/detailsrecipes/toto', name] );
 } */
}

