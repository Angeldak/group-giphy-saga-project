import { useState } from "react";
import { useDispatch } from "react-redux";

function CategoryForm({ setToggleAdd }) {
  const dispatch = useDispatch();
  const [inputAdd, setInputAdd] = useState("");

  function saveHandler() {
    dispatch({ type: "ADD_CATEGORY", payload: inputAdd });
    setInputAdd("");
    setToggleAdd(false);
  }

  return (
    <div>
      <input
        value={inputAdd}
        onChange={(event) => setInputAdd(event.target.value)}
        type="text"
        placeholder="Enter new category..."
      />
      <button onClick={() => saveHandler()}>Save</button>
      <button onClick={() => setToggleAdd(false)}>Cancel</button>
    </div>
  );
}

export default CategoryForm;
