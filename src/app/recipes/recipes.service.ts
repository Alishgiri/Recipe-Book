import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Injectable()
export class RecipesService {

  recipeChanged = new Subject<Recipe[]>();

  // selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Salmon Steak',
      'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Aperiam harumenim odio voluptates vel eaque porro sequi accusantium delectus?
       Harum incidunt nisi tenetur quidem omnis qui esse quia commodi reprehenderit!`,
      [
        new Ingredient('Fresh salmon', 1),
        new Ingredient('Fresh vegetables', 4)
      ]),
    new Recipe('Marska Pizza',
      'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Aperiam harumenim odio voluptates vel eaque porro sequi accusantium delectus?`,
      [
        new Ingredient('Wheat', 1),
        new Ingredient('Mozzarella', 4)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeWithIndex(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  AddingToShoppingList(item: Ingredient[]) {
    this.slService.getRecipeIngredients(item);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
