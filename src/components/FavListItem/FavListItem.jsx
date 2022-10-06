import { useState } from "react";
import CategoryList from "./CategoryList/CategoryList";

function FavListItem({ item }) {
  const [toggleCategories, setToggleCategories] = useState(false);

  function clickHandler() {
    setToggleCategories(!toggleCategories);
  }

  return (
    <div className="card">
      <div className="gif">
        <img src={item.url} />
      </div>
      <div className="button">
        <button onClick={() => clickHandler()}>
          {toggleCategories ? "Save" : "Categories"}
        </button>
        {toggleCategories && <CategoryList />}
      </div>
    </div>
  );
}

export default FavListItem;
