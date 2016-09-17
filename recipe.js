'use strict';

function addIngredient(recipe_hash, ingredient, num) {
  recipe_hash[ingredient] = num;
  return recipe_hash;
}

function removeIngredient(recipe_hash, ingredient) {
  delete recipe_hash[ingredient];
  return recipe_hash;
}

function updateIngredient(recipe_hash, ingredient, num) {
  recipe_hash[ingredient] = num;
  return recipe_hash;
}

function readRecipe(recipe_hash) {
  for (var ingredient in recipe_hash) {
    console.log("this recipe calls for " + recipe_hash[ingredient] + " of " + ingredient );
  }
}