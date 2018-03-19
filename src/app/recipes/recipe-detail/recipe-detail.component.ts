import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from '../../shared/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeReceived: Recipe;
  index: number;

  constructor(
    private recipesService: RecipesService,
    private slService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeReceived = this.recipesService.getRecipeWithIndex(+params.index);
        this.index = params['index'];
      });
  }

  addToIngredients() {
    this.recipesService.AddingToShoppingList(this.recipeReceived.ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }

}
