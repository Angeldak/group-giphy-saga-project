import { useState } from "react";
import { useDispatch } from "react-redux";
import './SearchForm.css';


function SearchForm() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    console.log('This is event.target.value '), e.target.value;
    setSearch(e.target.value);
  }

  const handleClick = () => {
    dispatch({
      type: 'SEARCH_GIF',
      payload: search
    });
    setSearch('');
  }

  return (
    <div>
      <h2>Search for GIF</h2>
      <div className="searchInputs">
      <input onChange={(e) => {handleInput(e)}} placeholder="Enter search..." value={search}></input>
      <button onClick={handleClick}>Search</button>
      </div>
    </div>
  )
}

export default SearchForm;
