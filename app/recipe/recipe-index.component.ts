import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "../services/localstorage.service";
import { Recipe } from "../models/recipe.model";
import { pageTransition } from "../animations";

@Component({
  selector: 'index',
  moduleId: module.id,
  templateUrl: 'recipe-index.html', 
  styleUrls: ['recipe-index.css'], 
  animations: [ pageTransition ]
})
export class RecipeIndex {
  recipes: Recipe[]; 
  numberOfRecipes: number; 
  plural: string; 


  constructor(public _localStorage: LocalStorage) {}

  ngOnInit():void {
    this.recipes = this._localStorage.fetchRecipes(); 
    this.numberOfRecipes = this.recipes.length; 
    this.plural = this.numberOfRecipes === 1 ? '' : 's'; 

  }
}