// tslint:disable-next-line:import-spacing
import {BrowserModule} from'@angular/platform-browser';
import {NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HeaderComponent} from './header/header.component';
import { RouterModule, Routes } from '@angular/router' ;
import { HomeComponent } from './nav/home/home.component';
import { ImagesComponent } from './nav/images/images.component';
import { LocationsComponent } from './nav/locations/locations.component';
import { LoginComponent } from './nav/login/login.component';

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
import { IngredientComponent } from './nav/home/ingredient/ingredient.component';
import { FooterComponent } from './footer/footer.component';
import { ListeIngredientsComponent } from './nav/home/ingredient/liste-ingredients/liste-ingredients.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ImagesComponent,
    LocationsComponent,
    LoginComponent,
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
    DropdownModule
      ],
  providers: [IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http); }
  // platformBrowserDynamic().bootstrapModule(AppModule);
