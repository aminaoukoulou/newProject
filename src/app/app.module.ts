// tslint:disable-next-line:import-spacing
import {BrowserModule} from'@angular/platform-browser';
import {NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {LoginComponent} from './login/login.component';
import { RouterModule } from '@angular/router' ;
import { CategoriesComponent } from './nav/categories/categories.component';
import { RecettesComponent } from './nav/recettes/recettes.component';
import { DetailsRecipesComponent } from './nav/detailsrecipes/details-recipes.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { routes } from './app-routing.module';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { IngredientsService } from './Services/ingredients.service';
import { IngredientComponent } from './nav/categories/ingredient/ingredient.component';
import { FooterComponent } from './footer/footer.component';
import { ListeIngredientsComponent } from './nav/categories/ingredient/liste-ingredients/liste-ingredients.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    CategoriesComponent,
    RecettesComponent,
    DetailsRecipesComponent,
    IngredientComponent,
    FooterComponent,
    ListeIngredientsComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    TabViewModule,
    CodeHighlighterModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    DropdownModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
      ],
  providers: [IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http); }
  // platformBrowserDynamic().bootstrapModule(AppModule);
