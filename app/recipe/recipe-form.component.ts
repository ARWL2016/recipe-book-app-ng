import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Recipe } from "../models/recipe.model";

@Component({
  templateUrl: 'app/recipe/recipe-form.component.html'
})
export class RecipeForm {
  recipe = new Recipe('', ''); 
}