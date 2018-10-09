import { Component, OnInit, Input } from '@angular/core';
import { ingredient, ingredientsType } from '../../Ingredient';
import { IngredientsService } from 'src/app/Services/ingredients.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


// tslint:disable-next-line:member-ordering
selectedIngredient: ingredient;
info: ingredientsType[] ;

  onSelect(Ingredient: ingredient): void {
    this.selectedIngredient = Ingredient;
  }

  constructor(private ingredientService: IngredientsService) {
// constructor(private route: ActivatedRoute) {
  // this.route.params.subscribe( params => console.log(params));
}

  getInfo() {
    this.ingredientService.getInfo().subscribe((info: ingredientsType[]) => this.info = info);
  }
  ngOnInit() {
    this.getInfo();
   }

}
