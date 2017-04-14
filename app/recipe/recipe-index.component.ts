import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "../services/localstorage.service";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: 'index',
  templateUrl: 'app/recipe/recipe-index.html'
})
export class RecipeIndex {
  recipes: Recipe; 


  constructor(private _localStorage: LocalStorage) {}

  ngOnInit():void {
    this.recipes = this._localStorage.fetchRecipes()
    console.log('Recipes:', this.recipes); 

  }
}