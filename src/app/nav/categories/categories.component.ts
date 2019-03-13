import { Component, OnInit } from '@angular/core';
import { ingredient, ingredientsType, Category } from '../../Ingredient';
import { IngredientsService } from 'src/app/Services/ingredients.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {


  // tslint:disable-next-line:member-ordering
  selectedIngredient: ingredient;
  info: ingredientsType[];
  categories: Category[];
  onSelect(Ingredient: ingredient): void {
    this.selectedIngredient = Ingredient;
  }

  constructor(private ingredientService: IngredientsService) {
    // constructor(private route: ActivatedRoute) {
    // this.route.params.subscribe( params => console.log(params));
  }

  getInfo() {
    this.ingredientService.getInfo().subscribe((info: ingredientsType[]) => this.info = info);
    this.ingredientService.getCategories().subscribe((categories: Category[]) => this.categories = categories);
  }
  ngOnInit() {
    this.getInfo();
  }

}
