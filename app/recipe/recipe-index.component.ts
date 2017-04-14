import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "../services/localstorage.service";

@Component({
  selector: 'index',
  templateUrl: 'app/recipe/recipe-index.component.html'
})
export class RecipeIndex {
  recipeTitles: string[] = ["Chicken Pie", "Vindaloo", "Bibbimbap"]; 

  constructor(private _localStorage: LocalStorage) {}

  ngOnInit() {
    this._localStorage.log("recipe-index init"); 
  }
}