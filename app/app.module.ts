import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeIndex } from "./recipe/recipe-index.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    RecipeIndex
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
