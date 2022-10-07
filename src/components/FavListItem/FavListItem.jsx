import { useState } from "react";
import CategoryList from "./CategoryList/CategoryList";

function FavListItem({ item }) {
  const [toggleCategories, setToggleCategories] = useState(false);

  return (
    <div className="card">
      <div className="gif">
        <img src={item.url} />
      </div>
      <div className="button">
        {toggleCategories ? (
          ""
        ) : (
          <button onClick={() => setToggleCategories(!toggleCategories)}>
            {"Categories"}
          </button>
        )}
        {toggleCategories && (
          <CategoryList setToggleCategories={setToggleCategories} item={item} />
        )}
      </div>
    </div>
  );
}

export default FavListItem;
