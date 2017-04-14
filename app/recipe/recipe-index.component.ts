import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "../services/localstorage.service";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: 'index',
  templateUrl: 'app/recipe/recipe-index.component.html'
})
export class RecipeIndex {
  recipeTitles: string[]; 


  constructor(private _localStorage: LocalStorage) {}

  ngOnInit():void {
    this.recipeTitles = this._localStorage.fetchRecipes()
      .map((recipe:Recipe) => recipe.recipeName); 
    console.log(this.recipeTitles); 

  }
}