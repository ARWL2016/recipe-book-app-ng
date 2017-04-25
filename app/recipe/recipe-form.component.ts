import { Component, OnInit, trigger, state, style, animate, transition } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router'; 
import { Recipe } from "../models/recipe.model";
import { LocalStorage } from "../services/localstorage.service";
import { pageTransition } from "../animations";
import { ToastrService } from "../services/toastr.service";

@Component({
  moduleId: module.id,
  templateUrl: 'recipe-form.html',
  styleUrls: ['recipe-form.css'], 
  animations: [ pageTransition, 
    trigger('invalid', [
      state('displayed', style({ transform: 'translateY(0)' })), 
      transition('void => displayed', [
        style({ opacity: 0}), 
        animate('500ms ease-in')
      ]), 
      transition('displayed => void', [
        animate(500, style({ opacity: 0}))
      ])  
    ]),  //trigger
  ] //anim
}) //component 
export class RecipeForm {
  recipe = new Recipe('', '', [], ''); 
  id: string; 
  state: string = 'displayed';

  constructor(
    public _localStorage: LocalStorage, 
    public _toastr: ToastrService,
    public _router: Router, 
    public _route: ActivatedRoute
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
      this._toastr.success('Recipe added!'); 
    } else {
      this._localStorage.editRecipe(this.recipe); 
      this._router.navigate(['/recipes']); 
      this._toastr.success('Changes saved!'); 
      }
  }
}