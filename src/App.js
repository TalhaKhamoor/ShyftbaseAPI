import "./App.css";
// import "./key";
import Axios from "axios";
import { useState } from "react";
import Tile from "./Tile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = "1777e763";
  const YOUR_APP_KEY = "99bf013c274395f66f664f51e316430b	";

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1>🥪🦞🍩Talha Food Recipe🍕🍰🥞</h1>
      <form className="foodApp_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="foodApp_input"
          placeholder="Please enter search here"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="foodApp_submit" type="submit" value="Search" />
      </form>

      <div className="foodApp_recipes">
        {recipes.map((recipe) => {
          return <Tile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
