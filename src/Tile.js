import React from "react";
import "./Tile.css";

export default function Tile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\(jpeg|jpg|gif|png$/) != null && (
      <div
        className="tile"
        onClick={() => {
          window.open(recipe["recipe"]["url"]);
        }}
      >
        <img className="tile_img" src={recipe["recipe"]["image"]} />
        <p className="tile_name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
}
