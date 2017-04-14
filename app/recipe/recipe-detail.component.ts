import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from "../services/localstorage.service";
import { Recipe } from "../models/recipe.model";

@Component({
  templateUrl: 'app/recipe/recipe-detail.html'
}) 
export class RecipeDetail {
  id: string;
  recipe: Recipe;  

  constructor(
    private _route: ActivatedRoute, 
    private _localStorage: LocalStorage
    ) {
    console.log(this._route.snapshot.params['id']);
    this.id = this._route.snapshot.params['id'];
    
  }

  ngOnInit() {
    
    this.recipe = this._localStorage.fetchRecipeById(this.id); 
    console.log(this.recipe); 
  }

  
}