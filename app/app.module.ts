import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RecipeIndex } from "./recipe/recipe-index.component";
import { RecipeForm } from "./recipe/recipe-form.component";
import { RecipeDetail } from "./recipe/recipe-detail.component";

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot([
      { path: 'recipes', component: RecipeIndex}, 
      { path: 'recipes/:id', component: RecipeDetail}, 
      { path: 'form', component: RecipeForm }, 
      { path: '', redirectTo: 'recipes', pathMatch: 'full'},
      { path: '**', redirectTo: 'recipes', pathMatch: 'full'}
    ], { useHash: true})
     ],
  declarations: [ 
    AppComponent, 
    RecipeIndex, 
    RecipeDetail,
    RecipeForm
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
