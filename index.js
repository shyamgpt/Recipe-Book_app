//1df33ca001104822a3792b099c76fe14  

const API_KEY ="1df33ca001104822a3792b099c76fe14";
const recipeListEle = document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipeListEle.innerHTML = "";
    recipes.forEach((recipe) =>{
        const recipeItemEle = document.createElement("li");
        recipeItemEle.classList.add("recipe-item");
        recipeImageEle = document.createElement("img");
        recipeImageEle.src = recipe.image;
        recipeImageEle.alt = "recipe-image";

        //adding title -->

        recipeTitleEle = document.createElement("h2");
        recipeTitleEle.innerText = recipe.title;

        //Indigrient -->

        recipeIngredientsEle = document.createElement("p");
        recipeIngredientsEle.innerHTML =`<strong>Ingredient: </strong> ${recipe.extendedIngredients
        .map((ingredient) => ingredient.original).join(", ")}`

        recipeItemEle.appendChild(recipeImageEle);
        recipeItemEle.appendChild(recipeTitleEle);
        recipeItemEle.appendChild(recipeIngredientsEle);
        recipeListEle.appendChild(recipeItemEle);
    })
}

 

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

   
  
    const data = await response.json()
    return data.recipes
}

async function init() {
    const recipes = await getRecipes();
    // console.log(recipes);
    displayRecipes(recipes);

}

init();