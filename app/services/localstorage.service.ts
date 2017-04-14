import { Injectable } from "@angular/core";
import * as _ from 'underscore'; 

@Injectable()

export class LocalStorage {
  starterRecipes = [
    {
      recipeName: "Pumpkin Pie", 
      ingredients: ["pumpkins", "pie"], 
      _id: _.uniqueId()
    }, 
    {
      recipeName: "Roast Chicken", 
      ingredients: ["chicken", "potatoes"],
      _id: _.uniqueId()
    }, 
    {
      recipeName: "Spaghetti Carbonara", 
      ingredients: ["spaghetti", "cream", "mushrooms"],
      _id: _.uniqueId()
    }, 
    {
      recipeName: "French Onion Soup", 
      ingredients: ["onions", "soup"],
      _id: _.uniqueId()
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


}

