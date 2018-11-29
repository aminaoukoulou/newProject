import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ingredientsType, Recipes } from '../Ingredient';
import 'rxjs/add/observable/of';



@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  ingredients = [
    { id: 1, name: 'Tomate', image: '../../../assets/img/tomat.png', type: 'Legumes', figure: 'pic1'},
    { id: 2, name: 'Courgette', image: '../../../assets/img/courgettes.jpg', type: 'Legumes', figure: 'pic2'} ,
    { id: 3, name: 'Carotte', image: '../../../assets/img/carottes.jpg', type: 'Legumes' , figure: 'pic3'},
    { id: 4, name: 'Poivrons', image: '../../../assets/img/poivrons.jpg', type: 'Legumes', figure: 'pic4'},
    { id: 5, name: 'Aubergine', image: '../../../assets/img/aubergine.jpg', type: 'Legumes', figure: 'pic5'},
    { id: 6, name: 'Citrouille', image: '../../../assets/img/citrouille.jpg', type: 'Legumes', figure: 'pic6' },
    { id: 7, name: 'Pomme de terre', image: '../../../assets/img/patates.jpg', type: 'Legumes', figure: 'pic7'},
    { id: 8, name: 'Patate douce', image: '../../../assets/img/patates-douce.jpg', type: 'Legumes', figure: 'pic8'},
    { id: 9, name: 'Beurre', image: '../../../assets/img/beurre.jpg', type: 'Gras', figure: 'pic9' },
    { id: 10, name: 'Haricot vert', image: '../../../assets/img/haricot-vert.jpg', type: 'Legumes', figure: 'pic10'},
    { id: 11, name: 'Melon', image: '../../../assets/img/melon.jpg', type: 'Fruits', figure: 'pic11' },
    { id: 12, name: 'Pomme', image: '../../../assets/img/pommes.jpg', type: 'Fruits', figure: 'pic13' },
    { id: 13, name: 'Fraise', image: '../../../assets/img/fraise.jpg', type: 'Fruits', figure: 'pic14'},
    { id: 14, name: 'Kiwi', image: '../../../assets/img/Kiwi.jpg', type: 'Fruits', figure: 'pic15'},
    { id: 15, name: 'Banane', image: '../../../assets/img/bananes.jpg', type: 'Fruits', figure: 'pic16'},
    { id: 16, name: 'Ananas', image: '../../../assets/img/ananas.jpg', type: 'Fruits', figure: 'pic17'},
    { id: 17, name: 'Citron', image: '../../../assets/img/citron_jaune_et_vert.jpg', type: 'Fruits', figure: 'pic18'},
    { id: 18, name: 'Framboise', image: '../../../assets/img/framboises.jpg', type: 'Fruits', figure: 'pic19'},
    { id: 19, name: 'Fruit de la passion', image: '../../../assets/img/fruit-de-la-passion.jpg', type: 'Fruits', figure: 'pic20'},
    { id: 20, name: 'Poulet hachee', image: '../../../assets/img/viande-hachee.jpg', type: 'Volaille', figure: 'pic21' },
    { id: 21, name: 'Boeuf hachee', image: '../../../assets/img/viande-hachee.jpg', type: 'Viande', figure: 'pic22'},
    { id: 22, name: 'Oeuf', image: '../../../assets/img/oeuf.jpg', type: 'Autres', figure: 'pic23' },
    { id: 23, name: 'Huile vegetale', image: '../../../assets/img/huile.jpg', type: 'Gras', figure: 'pic24' },
    { id: 24, name: 'Huile d olive', image: '../../../assets/img/huil-olive.png', type: 'Gras', figure: 'pic25' },
    { id: 25, name: 'Mozzarella', image: '../../../assets/img/mozzarella.jpg', type: 'ProduitLaitier', figure: 'pic26' },
    { id: 26, name: 'Potimarrons', image: '../../../assets/img/ptitmarrons.jpg', type: 'Legumes', figure: 'pic27' },
    { id: 27, name: 'Bouillon de volail', image: '../../../assets/img/pas-image.jpg', type: 'Autres', figure: 'pic28'},
    { id: 28, name: 'Bouillon de champignon', image: '../../../assets/img/pas-image.jpg', type: 'Autres', figure: 'pic29'},
    { id: 29, name: 'Boillon de boeuf', image: '../../../assets/img/pas-image.jpg', type: 'Autres', figure: 'pic30' },
    { id: 30, name: 'Bouillon de poisson', image: '../../../assets/img/pas-image.jpg', type: 'Autres', figure: 'pic31' },
    { id: 31, name: 'Asperges', image: '../../../assets/img/asperges.jpg', type: 'Legumes', figure: 'pic32' },
    { id: 32, name: 'Semoule', image: '../../../assets/img/semoule.jpg', type: 'Cereales', figure: 'pic133'},
    { id: 33, name: 'Saumon', image: '../../../assets/img/saumon-tranche.jpg', type: 'Poissons', figure: 'pic34' },
    { id: 34, name: 'Crevettes', image: '../../../assets/img/crevettes.jpg', type: 'Poissons', figure: 'pic35'},
    { id: 35, name: 'Riz', image: '../../../assets/img/riz_blanc.jpg', type: 'Cereales', figure: 'pic36' },
    { id: 36, name: 'Huile de sésame', image: '../../../assets/img/huile-sesam.jpg', type: 'Condiments', figure: 'pic37'},
    { id: 37, name: 'Creme fraiche', image: '../../../assets/img/creme-fraiche.jpg', type: 'ProduitLaitier', figure: 'pic38' },
    { id: 38, name: 'La vanche qui rit', image: '../../../assets/img/vache-qui-rie.jpg', type: 'ProduitLaitier', figure: 'pic39' },
    { id: 39, name: 'Reblochon', image: '../../../assets/img/reblochon.jpg', type: 'ProduitLaitier', figure: 'pic40' },
    { id: 41, name: 'Fromage rape', image: '../../../assets/img/emmental_rape.jpg', type: 'ProduitLaitier', figure: 'pic41'},
    { id: 42, name: 'Oignons', image: '../../../assets/img/oignons.jpg', type: 'Legumes', figure: 'pic42' },
    { id: 43, name: 'Farine', image: '../../../assets/img/farine.jpg', type: 'Cereales', figure: 'pic43'},
    { id: 44, name: 'Chocolat', image: '../../../assets/img/chocolat.jpg', type: 'Autres', figure: 'pic44' },
    { id: 45, name: 'Riz', image: '../../../assets/img/riz_blanc.jpg', type: 'Cereales', figure: 'pic45'},
    { id: 46, name: 'Ail', image: '../../../assets/img/ail.jpg', type: 'Plantes', figure: 'pic46'},
    { id: 47, name: 'Vinaigre balsamique', image: '../../../assets/img/vinaigre-balsamique.jpg', type: 'Condiments', figure: 'pic47'},
    { id: 48, name: 'Sucre', image: '../../../assets/img/sucre.png', type: 'Epices', figure: 'pic48' },
    { id: 49, name: 'Sel', image: '../../../assets/img/sel.jpeg', type: 'Epices', figure: 'pic49'},
    { id: 50, name: 'Noix de muscade', image: '../../../assets/img/noix-de-muscade.jpg', type: 'Epices', figure: 'pic50'},
    { id: 51, name: 'Poivre', image: '../../../assets/img/poivre.jpg', type: 'Epices', figure: 'pic51'},
    { id: 52, name: 'Sauce soja', image: '../../../assets/img/sauce-soja.jpg', type: 'Condiments', figure: 'pic52'},
    { id: 53, name: 'Pates', image: '../../../assets/img/pates.jpg', type: 'Cereales', figure: 'pic53' },
    { id: 54, name: 'Huile de coco', image: '../../../assets/img/huile-bio-de-coco.jpg', type: 'Gras', figure: 'pic54'},
    { id: 55, name: 'Vinaigre de riz', image: '../../../assets/img/vinaigre-de-riz.jpg', type: 'Condiments', figure: 'pic55' },
    { id: 56, name: 'Coca cola', image: '../../../assets/img/coca.jpg', type: 'Boissons', figure: 'pic56'}

  ];

   info: ingredientsType[] = [
     { nom: 'fruits', rooting: '/ingredient/Fruits', figure: 'pic1', image: '../../../assets/img/fruits.jpg'},
     { nom: 'legumes', rooting: '/ingredient/Legumes', figure: 'pic2', image: '../../../assets/img/legumes.jpg'},
     { nom: 'cereales', rooting: '/ingredient/Cereales', figure: 'pic3', image: '../../../assets/img/cereales.jpg' },
     { nom: 'plantes', rooting: '/ingredient/Plantes', figure: 'pic4', image: '../../../assets/img/herbes-aromatiques.jpg'},
     { nom: 'autres', rooting: '/ingredient/Autres', figure: 'pic5', image: '../../../assets/img/pas-image.jpg'},
     { nom: 'poissons', rooting: '/ingredient/Poissons', figure: 'pic6', image: '../../../assets/img/poissonssssss.jpg'},
     { nom: 'gras', rooting: '/ingredient/Gras', figure: 'pic7', image: '../../../assets/img/gras.jpg'},
     { nom: 'viande', rooting: '/ingredient/Viande', figure: 'pic8', image: '../../../assets/img/vianddde.jpg'},
     { nom: 'epices', rooting: '/ingredient/Epices', figure: 'pic10', image: '../../../assets/img/epices.jpg' },
     { nom: 'condiments', rooting: '/ingredient/Condiments', figure: 'pic11', image: '../../../assets/img/condiments-sauces.jpg' },
     { nom: 'ProduitLaitier', rooting: '/ingredient/ProduitLaitier', figure: 'pic12', image: '../../../assets/img/produits-laitiers.jpg'},
     { nom: 'volaille', rooting: '/ingredient/Volaille', figure: 'pic13', image: '../../../assets/img/volailes.jpg'},
     { nom: 'boissons', rooting: '/ingredient/Boissons', figure: 'pic14', image: '../../../assets/img/boissssssons.jpg' },

  ];
  detailsR: Recipes[] = [
    // tslint:disable-next-line:max-line-length
    { name: 'moussaka', image: '../../../assets/img/moussaka.jpg', text: 'recipeMoussaka', rooting: '/detailsrecipes/moussaka'},
    // tslint:disable-next-line:max-line-length
     { name: 'Tarte', image: '../../../assets/img/tarte-au-citron.jpg', text: 'recipeTarte', rooting: '/detailsrecipes/Tarte' },
    // tslint:disable-next-line:max-line-length
    { name: 'Risotto', image: '../../../assets/img/risotto-asperges.jpg', text: 'recipeRisoto', rooting: '/detailsrecipes/Risotto' },
    // tslint:disable-next-line:max-line-length
    { name: 'Salde', image: '../../../assets/img/salade-tomate-mozzarella.jpeg', text: 'recipeSalade', rooting: '/detailsrecipes/Salde' },
    // tslint:disable-next-line:max-line-length
    { name: 'Tartiflette', image: '../../../assets/img/tartiflette.jpg', text: 'recipeTartiflette', rooting: '/detailsrecipes/Tartiflette' },
    // tslint:disable-next-line:max-line-length
    { name: 'Veloute', image: '../../../assets/img/velouter-potimaron-patate-douce.jpg', text: 'recipeVeloute', rooting: '/detailsrecipes/Veloute' },
    {
      // tslint:disable-next-line:max-line-length
      name: 'roti', image: 'https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/i13l/cvf151_053.jpg', text: 'recipeRoti', rooting: '/detailsrecipes/roti'},
    ];


  constructor() { }
  getAffiche() {
    return this.ingredients;
  }
  getList(type: String) {
    return this.ingredients.filter(ingredient => ingredient.type === type);
  }
  getInfo(): Observable<ingredientsType[]> {
    return Observable.of(this.info);
  }
  getDetailsR(name: string) {
    return this.detailsR.filter(recipe => recipe.name === name);
  }

  /* getRecette(name: String) {
    return this.detailsR.filter(recette => recette.name === name);
   } */

  getRecettes() {
    return Observable.of( this.detailsR);
  }

}

