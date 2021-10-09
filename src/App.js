import "./App.css";
// import "./key";
import Axios from "axios";

function App() {
  const YOUR_APP_ID = "a3528aa5";
  const YOUR_APP_KEY = "b981ff5cc07fed4746c9e995767a238b";
  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <h1 onClick={getRecipes}>Hello world</h1>
    </div>
  );
}

export default App;
