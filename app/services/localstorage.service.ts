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
      recipeName: "Peshwari Naan", 
      ingredientsArray: ["flour", "yeast", "yoghurt", "coconut", "almonds"],
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
      ingredientsArray: ["onions", "butter", "sugar", "dry sherry", "beef stock", "thyme"],
      ingredientsString: '',
      id: _.uniqueId()
    }  
  ]

  fetchRecipeList(): Recipe[] {
    return JSON.parse(localStorage.getItem("recipeList"));
  }
  setRecipeList(list: Recipe[]) {
    localStorage.setItem("recipeList", JSON.stringify(list));
  }

  fetchRecipes(): Recipe[] {
    const recipeList = this.fetchRecipeList(); 
      if (!recipeList) {
        this.setRecipeList(this.starterRecipes);
      }  
      return this.fetchRecipeList(); 
      
  }

  fetchRecipeById(id:string): Recipe {
    return (this.fetchRecipeList()
      .filter((recipe:Recipe) => recipe.id === id))[0]; 
  }

  saveRecipe(recipe: Recipe) {
    recipe.id = _.uniqueId(); 
    recipe.ingredientsArray = recipe.ingredientsString.split(','); 
    const recipeList = this.fetchRecipeList();
    recipeList.push(recipe); 
    this.setRecipeList(recipeList); 
  }

  deleteRecipeById(id: string):void {
    const filteredList = this.fetchRecipeList().filter((recipe: Recipe) => recipe.id !== id); 
    this.setRecipeList(filteredList); 
  }

  editRecipe(editedRecipe: Recipe) { 
    const filteredList = this.fetchRecipeList()
        .filter((recipe: Recipe) => recipe.id !== editedRecipe.id); 
    editedRecipe.ingredientsArray = editedRecipe.ingredientsString.split(','); 
    filteredList.push(editedRecipe); 
    this.setRecipeList(filteredList); 
  }


}

