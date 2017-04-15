import { Injectable } from "@angular/core";
import * as _ from 'underscore';
import { Recipe } from "../models/recipe.model";

@Injectable()

export class LocalStorage {
  starterRecipes = [
    {
      recipeName: "Pumpkin Pie", 
      ingredientsArray: ["pumpkins", "milk", "eggs", "salt", "cinnamon"], 
      ingredientsString: '',
      id: _.uniqueId()
    }, 
    {
      recipeName: "Roast Chicken", 
      ingredientsArray: ["chicken", "potatoes"],
      ingredientsString: '',
      id: _.uniqueId()
    }, 
    {
      recipeName: "Spaghetti Carbonara", 
      ingredientsArray: ["spaghetti", "eggs", "bacon", "cheese", "black pepper"],
      ingredientsString: '',
      id: _.uniqueId()
    }, 
    {
      recipeName: "French Onion Soup", 
      ingredientsArray: ["onions", "soup"],
      ingredientsString: '',
      id: _.uniqueId()
    }  
  ]

  fetchRecipeList() {
    return JSON.parse(localStorage.getItem("recipeList"));
  }

  fetchRecipes(): Recipe[] {
    const recipeList = this.fetchRecipeList(); 
      if (!recipeList) {
        localStorage.setItem("recipeList", JSON.stringify(this.starterRecipes));
        return this.fetchRecipeList(); 
      } else {
        console.log('fetchrecipes: ', recipeList); 
        return this.fetchRecipeList(); 
      }
  }

  fetchRecipeById(id:string): Recipe {
    return (this.fetchRecipeList()
      .filter((recipe:Recipe) => recipe.id === id))[0]; 
  }

  saveRecipe(recipe: Recipe) {
    recipe.id = _.uniqueId(); 
    recipe.ingredientsArray = recipe.ingredientsString.split(','); 
    console.log('save recipes', recipe); 
    const recipeList = this.fetchRecipeList();
    recipeList.push(recipe); 
    localStorage.setItem("recipeList", JSON.stringify(recipeList)); 
  }

  deleteRecipeById(id: string):void {
    const filteredList = this.fetchRecipeList().filter((recipe: Recipe) => recipe.id !== id); 
    localStorage.setItem("recipeList", JSON.stringify(filteredList)); 
  }

  editRecipe(editedRecipe: Recipe) {
    console.log('edit', editedRecipe); 
    const recipeList = this.fetchRecipeList();
    const filteredList = recipeList.filter((recipe: Recipe) => {
      return recipe.id !== editedRecipe.id; 
    }); 
    editedRecipe.ingredientsArray = editedRecipe.ingredientsString.split(','); 
    console.log(filteredList); 
    filteredList.push(editedRecipe); 
    localStorage.setItem("recipeList", JSON.stringify(filteredList)); 
    
  }


}

