import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList/CategoryList";

function FavListItem({ item }) {
  const dispatch = useDispatch();
  const [toggleCategories, setToggleCategories] = useState(false);
  const categoriesList = useSelector((store) => store.categories);
  const currentCategory =
    categoriesList[
      categoriesList.findIndex((cats) => cats.id === item.category_id)
    ]?.name;

  function removeFavorite(id) {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  }

  return (
    <div className="card">
      <div className="gif">
        <img src={item.url} />
        <p className="gif-p">{`Category: ${currentCategory}`}</p>
      </div>
      <div className="button">
        {toggleCategories ? (
          ""
        ) : (
          <>
            <button onClick={() => setToggleCategories(!toggleCategories)}>
              Categories
            </button>
            <button onClick={() => removeFavorite(item.id)}>Un-Favorite</button>
          </>
        )}
        {toggleCategories && (
          <CategoryList setToggleCategories={setToggleCategories} item={item} />
        )}
      </div>
    </div>
  );
}

export default FavListItem;
