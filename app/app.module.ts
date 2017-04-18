import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RecipeIndex } from "./recipe/recipe-index.component";
import { RecipeForm } from "./recipe/recipe-form.component";
import { RecipeDetail } from "./recipe/recipe-detail.component";
import { AboutPage } from "./about/about-page.component";
import { LocalStorage } from "./services/localstorage.service";
import { ToastrService } from "./services/toastr.service";

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot([
      { path: 'recipes', component: RecipeIndex}, 
      { path: 'recipes/:id', component: RecipeDetail}, 
      { path: 'form', component: RecipeForm }, 
      { path: 'form/:id', component: RecipeForm }, 
      { path: 'about', component: AboutPage }, 
      { path: '', redirectTo: 'recipes', pathMatch: 'full'},
      { path: '**', redirectTo: 'recipes', pathMatch: 'full'}
    ], { useHash: true})
     ],
  declarations: [ 
    AppComponent, 
    RecipeIndex, 
    RecipeDetail,
    RecipeForm, 
    AboutPage
     ],
  providers: [LocalStorage, ToastrService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
