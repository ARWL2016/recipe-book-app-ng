import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "../services/localstorage.service";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: 'index',
  templateUrl: 'app/recipe/recipe-index.html', 
  styleUrls: ['app/recipe/recipe-index.css']
})
export class RecipeIndex {
  recipes: Recipe[]; 
  numberOfRecipes: number; 
  plural: string; 


  constructor(private _localStorage: LocalStorage) {}

  ngOnInit():void {
    this.recipes = this._localStorage.fetchRecipes(); 
    this.numberOfRecipes = this.recipes.length; 
    this.plural = this.numberOfRecipes === 1 ? '' : 's'; 

  }
}