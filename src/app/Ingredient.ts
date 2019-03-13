// tslint:disable-next-line:class-name
export class ingredient {
    id: number;
    name: String;
    image: String;
    // imagePath
    type: String;
    figure: String;
    // cssFigure
}

// tslint:disable-next-line:class-name
export class ingredientsType {
         rooting: String;
        //  routing
         nom: String;
         figure: String;
         image: String;
         // ingredientType = categories
       }

export class Category {
    type_categorie: String;
    image_categorie: String;
}

export class Ingredient {
  name_ingredient: String;
  image_ingredient: String;
  type_categorie: String;
}

export class Recipes {
    name: String;
    image: String;
    text: String;
    rooting: String;
    // crée une classe recipe a part
}

export class Recette {
  name_recette: String;
  image_recette: String;
  description_recette: String;

}
