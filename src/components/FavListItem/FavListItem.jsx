import { useState } from "react";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList/CategoryList";

function FavListItem({ item }) {
  const [toggleCategories, setToggleCategories] = useState(false);
  const categoriesList = useSelector((store) => store.categories);

  return (
    <div className="card">
      <div className="gif">
        <img src={item.url} />
        <p>{`Category: ${
          categoriesList[
            categoriesList.findIndex((cats) => cats.id === item.category_id)
          ].name
        }`}</p>
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
