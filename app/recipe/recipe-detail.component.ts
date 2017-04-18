import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from "../services/localstorage.service";
import { Recipe } from "../models/recipe.model";
import { ToastrService } from "../services/toastr.service";


@Component({
  templateUrl: 'app/recipe/recipe-detail.html', 
  styleUrls: ['app/recipe/recipe-detail.css']


}) 
export class RecipeDetail {
  id: string;
  recipe: Recipe;  

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router, 
    private _localStorage: LocalStorage, 
    private _toastr: ToastrService
    ) {
    console.log(this._route.snapshot.params['id']);
    this.id = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.recipe = this._localStorage.fetchRecipeById(this.id); 
    console.log(this.recipe); 
  }

  deleteRecipe(id: string):void {
    this._localStorage.deleteRecipeById(this.id); 
    this._router.navigate(['/recipes']);
    this._toastr.info('Recipe deleted!'); 
  }


  
}