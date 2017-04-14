import { Injectable } from "@angular/core";
import * as _ from 'underscore';
import { Recipe } from "../models/recipe.model";

@Injectable()

export class LocalStorage {
  starterRecipes = [
    {
      recipeName: "Pumpkin Pie", 
      ingredients: ["pumpkins", "pie"], 
      id: _.uniqueId()
    }, 
    {
      recipeName: "Roast Chicken", 
      ingredients: ["chicken", "potatoes"],
      id: _.uniqueId()
    }, 
    {
      recipeName: "Spaghetti Carbonara", 
      ingredients: ["spaghetti", "cream", "mushrooms"],
      id: _.uniqueId()
    }, 
    {
      recipeName: "French Onion Soup", 
      ingredients: ["onions", "soup"],
      id: _.uniqueId()
    }  
  ]

  fetchRecipes() {
    const recipeList = JSON.parse(localStorage.getItem("recipeList")); 
      if (!recipeList) {
        localStorage.setItem("recipeList", JSON.stringify(this.starterRecipes));
        return JSON.parse(localStorage.getItem("recipeList"));
      } else {
        return JSON.parse(localStorage.getItem("recipeList")); 
      }
  }

  fetchRecipeById(id:string): Recipe {
    return (JSON.parse(localStorage.getItem("recipeList"))
      .filter((recipe:Recipe) => recipe.id === id))[0]; 
  }


}

