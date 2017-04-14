import { Component } from "@angular/core";

@Component({
  selector: 'index',
  templateUrl: 'app/recipe/recipe-index.component.html'
})
export class RecipeIndex {
  recipeTitles: string[] = ["Chicken Pie", "Vindaloo", "Bibbimbap"]; 
}