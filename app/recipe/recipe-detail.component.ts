import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from "../services/localstorage.service";
import { Recipe } from "../models/recipe.model";
import { ToastrService } from "../services/toastr.service";


@Component({
  moduleId: module.id,
  templateUrl: 'recipe-detail.html', 
  styleUrls: ['recipe-detail.css']


}) 
export class RecipeDetail {
  id: string;
  recipe: Recipe;  

  constructor(
    public _route: ActivatedRoute, 
    public _router: Router, 
    public _localStorage: LocalStorage, 
    public _toastr: ToastrService
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