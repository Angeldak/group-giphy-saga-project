import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../FavListItem/FavListItem.css";

function CategoryList({ setToggleCategories, item }) {
  const categoriesList = useSelector((store) => store.categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch({
      type: "SAVE_CATEGORIES",
      payload: { category_id: selectedCategories, id: item.id },
    });
    setToggleCategories(false);
  }

  return (
    <div>
      {categoriesList.map((item) => (
        <li key={item.id} className="category-li">
          <input
            value={item.id}
            onChange={(event) => setSelectedCategories(event.target.value)}
            type="radio"
            name="categories"
            id={item.name}
          />
          <label htmlFor={item.name}>{item.name}</label>
        </li>
      ))}
      <button onClick={() => clickHandler()}>Save</button>
      <button onClick={() => setToggleCategories(false)}>Cancel</button>
    </div>
  );
}

export default CategoryList;
