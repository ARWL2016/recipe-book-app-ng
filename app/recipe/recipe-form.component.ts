import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router'; 
import { Recipe } from "../models/recipe.model";
import { LocalStorage } from "../services/localstorage.service";

@Component({
  templateUrl: 'app/recipe/recipe-form.html',
  styleUrls: ['app/recipe/recipe-form.css']
})
export class RecipeForm {
  recipe = new Recipe('', '', [], ''); 
  id: string; 

  constructor(
    private _localStorage: LocalStorage, 
    private _router: Router, 
    private _route: ActivatedRoute
    ) {
      this.id = this._route.snapshot.params['id'];
    }

  ngOnInit() {
    console.log('init', this.recipe)
    if (this.id) {
      this.recipe = this._localStorage.fetchRecipeById(this.id); 
      this.recipe.ingredientsString = this.recipe.ingredientsArray.join(', '); 
      console.log(this.recipe); 
    }
  }

  submitForm():void {
    if (!this.id) {
      console.log('submit form', this.recipe); 
      this._localStorage.saveRecipe(this.recipe); 
      this._router.navigate(['/recipes']); 
    } else {
      this._localStorage.editRecipe(this.recipe); 
      this._router.navigate(['/recipes']); 
      }
  }
}