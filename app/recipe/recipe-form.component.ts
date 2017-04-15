import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Recipe } from "../models/recipe.model";
import { LocalStorage } from "../services/localstorage.service";

@Component({
  templateUrl: 'app/recipe/recipe-form.html',
  styleUrls: ['app/recipe/recipe-form.css']
})
export class RecipeForm {
  recipe = new Recipe('', '', ''); 

  constructor(private _localStorage: LocalStorage) {}

  ngOnInit() {
   
  }
}