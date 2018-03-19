import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs/Subscription';
import { RecipesServerService } from '../../recipes-server.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private rsService: RecipesServerService,
    private recipesService: RecipesService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();

    this.subscription = this.recipesService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  addRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSave() {
    this.rsService.storeRecipes().subscribe(
      (res: Response) => {
        console.log(res);
      },
      (error) => console.log(error)
    );
  }

  onFetch() {
    this.rsService.getRecipes();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
