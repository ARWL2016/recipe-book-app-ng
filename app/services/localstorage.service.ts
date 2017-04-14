import { Injectable } from "@angular/core";

@Injectable()

export class LocalStorage {
  starterRecipes = [
    {
      title: "Pumpkin Pie", 
      ingredients: ["pumpkins", "pie"]
    }, 
    {
      title: "Roast Chicken", 
      ingredients: ["chicken", "potatoes"] 
    }, 
    {
      title: "Spaghetti Carbonara", 
      ingredients: ["spaghetti", "cream", "mushrooms"]
    }, 
    {
      title: "French Onion Soup", 
      ingredients: ["onions", "soup"]
    }  
  ]

  fetchRecipes() {
    const recipeList = JSON.parse(localStorage.getItem("recipeList")); 
      if (recipeList === null) {
        localStorage.setItem("recipeList", JSON.stringify(this.starterRecipes));
      }
  }

  log(message: string):void {
    console.log(message); 
  }

}

