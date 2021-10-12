import "./App.css";
import Axios from "axios";
import { useState } from "react";
import Tile from "./Tile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("alcohol-free");

  const YOUR_APP_ID = "1777e763";
  const YOUR_APP_KEY = "99bf013c274395f66f664f51e316430b	";

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(url);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1>🥪🦞🍩Talha's Food Recipe App🍕🍰🥞</h1>
      <form className="foodApp_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="foodApp_input"
          placeholder="Please enter search here"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="foodApp_submit" type="submit" value="Search" />
        <select
          className="foodApp_healthLabels"
          onChange={(e) => {
            const selectedhealthLabel = e.target.value;
            sethealthLabels(selectedhealthLabel);
          }}
        >
          <option value="alcohol-free">alcohol-free</option>
          <option value="vegetarian">vegetarian</option>
          <option value="paleo">paleo</option>
          <option value="dairy-free">dairy-free</option>
          <option value="gluten-free">gluten-free</option>
          <option value="wheat-free">wheat-free</option>
          <option value="low-sugar">low-sugar</option>
          <option value="egg-free">egg-free</option>
          <option value="peanut-free">peanut-free</option>
          <option value="tree-nut-free">tree-nut-free</option>
          <option value="soy-free">soy-free</option>
          <option value="fish-free">fish-free</option>
          <option value="shellfish-free">shellfish-free</option>
        </select>
      </form>
      <div className="foodApp_recipes">
        {recipes.map((recipe) => {
          return <Tile key={recipe["recipe"]["url"]} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
