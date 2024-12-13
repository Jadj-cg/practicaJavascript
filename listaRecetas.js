// Get the form and recipe list container
const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipes');

// Add an event listener for the form submission
recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get the form data
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').value;

    // Create an object for the new recipe
    const newRecipe = {
        name: recipeName,
        ingredients: ingredients,
        instructions: instructions,
        category: category,
        image: image
    };

    // Call function to create a new recipe card
    createRecipeCard(newRecipe);

    // Optionally, reset the form after submission
    recipeForm.reset();
});

// Function to create and display a new recipe card
function createRecipeCard(recipe) {
    // Create a new card div
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    // Create the image element
    const img = document.createElement('img');
    img.src = recipe.image;  // Set the image URL
    img.alt = recipe.name;  // Set alt text for the image
    img.classList.add('recipe-image');

    // Create the card content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // Add the recipe name
    const nameElement = document.createElement('h3');
    nameElement.textContent = recipe.name;
    cardContent.appendChild(nameElement);

    // Add the category
    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Category: ${recipe.category}`;
    cardContent.appendChild(categoryElement);

    // Split ingredients by comma and create a list
    const ingredientsList = recipe.ingredients.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');

    // Add the ingredients as a list
    const ingredientsElement = document.createElement('ul');
    ingredientsElement.innerHTML = `Ingredients: ${ingredientsList}`;
    cardContent.appendChild(ingredientsElement);

    // Split ingredients by comma and create a list
    const instructionsList = recipe.instructions.split(',').map(instruction => `<li>${instruction.trim()}</li>`).join('');

    // Add the instructions
    const instructionsElement = document.createElement('ul');
    instructionsElement.innerHTML = `Instructions: ${instructionsList}`;
    cardContent.appendChild(instructionsElement);

     // Create a delete button
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Delete';
     deleteButton.classList.add('delete-button');
 
     // Add a click event listener to the delete button
     deleteButton.addEventListener('click', () => {
         // Remove the card from the DOM
         card.remove();
 
         // Remove the recipe from the array (assuming you have an array of recipes)
         // Replace 'recipesArray' with the actual name of your recipe array
         const index = recipesArray.indexOf(recipe);
         if (index !== -1) {
             recipesArray.splice(index, 1);
         }
     });

    // Append the image, card content and delete button to the card
    card.appendChild(img);
    card.appendChild(cardContent);
    cardContent.appendChild(deleteButton);

    // Append the card to the recipe list
    recipeList.appendChild(card);
}