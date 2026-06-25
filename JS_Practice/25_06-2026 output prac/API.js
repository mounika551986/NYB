async function getWeather() {
  const apiKey = "YOUR_REAL_API_KEY";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  console.log(data);
}
    async function getFood() {
    const foodName = document.getElementById("foodName").value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const result = document.getElementById("result");

        if (!data.meals) {
            result.innerHTML = "<p>Food not found!</p>";
            return;
        }

        const meal = data.meals[0];

        result.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" width="250">
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Area:</strong> ${meal.strArea}</p>
            <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0, 200)}...</p>
        `;
    } catch (error) {
        console.error(error);
    }
}
