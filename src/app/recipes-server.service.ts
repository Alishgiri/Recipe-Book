import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Recipe } from './recipes/recipe.model';
import { RecipesService } from './recipes/recipes.service';
import { AuthService } from './auth.service';

@Injectable()
export class RecipesServerService {

  constructor(
    private http: Http,
    private recipesService: RecipesService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    const token =  this.authService.getToken();
    return this.http.put('https://recipe-book-ee2de.firebaseio.com/recipes.json?auth=' + token, this.recipesService.getRecipes());
  }
  //'https://recipe-book-66e00.firebaseio.com/recipes.json?auth=' -> Node1dotmark firebase
  getRecipes() {
    const token =  this.authService.getToken();

    this.http.get('https://recipe-book-ee2de.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (res: Response) => {
          const recipes: Recipe[] = res.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (res: Recipe[]) => {
          this.recipesService.setRecipes(res);
        }
      );
  }
}
