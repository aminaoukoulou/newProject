import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/Services/ingredients.service';
import { Recipes } from 'src/app/Ingredient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  detailsR: Recipes[];
  Recipes: string;

  constructor(private ingredientService: IngredientsService, private activatedRoute: ActivatedRoute, private router: Router) {  }

 getDetailsR() {
   this.ingredientService.getDetailsR().subscribe((detailsR: Recipes[]) => this.detailsR = detailsR);
 }

  ngOnInit() {
   this.getDetailsR();
  }

/*  SelectRecipe() {
const name = this.router.snapshot.paramMap.get('name');
   this.router.navigate(['/detailsrecipes/toto', name] );
 } */
}

