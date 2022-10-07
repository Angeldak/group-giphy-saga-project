import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryForm from "../../CategoryForm/CategoryForm";
import "./Categories.css";

function Categories() {
  const dispatch = useDispatch();
  const categoriesList = useSelector((store) => store.categories);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleRemove, setToggleRemove] = useState(false);

  useEffect(() => {
    dispatch({ type: "GET_CATEGORIES" });
  }, []);
  return (
    <div className="container">
      <div className="cat-header">
        <h2>Current categories</h2>
      </div>
      <div className="categories-list">
        <ol>
          {categoriesList.map((item, index) => (
            <li key={index} className="categories-li">
              {item.name}
              {toggleRemove && (
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_CATEGORY", payload: item.id })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
      <div className="categories-buttons">
        <p>How would you like to modify the categories?</p>
        <button onClick={() => setToggleAdd(!toggleAdd)}>Add Category</button>
        <button onClick={() => setToggleRemove(!toggleRemove)}>
          Remove Category
        </button>
      </div>
      <div>{toggleAdd && <CategoryForm setToggleAdd={setToggleAdd} />}</div>
    </div>
  );
}

export default Categories;
