import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe.', 'https://upload.wikimedia.org/wikipedia/commons/4/4c/%22Galizische_K%C3%BCche%22._Rezepte_aus_Beskiden_0523.JPG')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
