import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
  const dispatch = useDispatch();
  const categoriesList = useSelector((store) => store.categories);
  const [toggleAdd, settToggleAdd] = useState(false);
  const [toggleRemove, setToggleRemove] = useState(false);

  useEffect(() => {
    dispatch({ type: "GET_CATEGORIES" });
  }, []);
  return (
    <div className="container">
      <h2>Current categories</h2>
      <div className="categories-list">
        {categoriesList.map((item, index) => (
          <li key={index} className="categories-li">
            {item.name}
            {toggleRemove && (
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_CATEGORY", payload: item.id })
                }
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </div>
      <div className="categories-buttons">
        <button onClick={() => settToggleAdd(!toggleAdd)}>Add Category</button>
        <button onClick={() => setToggleRemove(!toggleRemove)}>
          Remove Category
        </button>
      </div>
      <div>{toggleAdd && "addForm"}</div>
    </div>
  );
}

export default Categories;
