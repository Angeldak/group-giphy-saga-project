import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function HomeList() {
    const searchResults = useSelector(store => store.gifReducer);

    const markFavorite = () => {
        return
    }

    return (
        <div className="searchResultsDiv">
            <h2>HomeList</h2>
            {/* <p>{JSON.stringify(searchResults.data)}</p> */}
            {'data' in searchResults && searchResults.data.map((gif, index) => {
                    return(
                    <div  key={index}>
                    <img src={gif.images.original.url} />
                    <h4>{gif.title}</h4>
                    <button onClick={markFavorite}>Favorite</button>
                    </div>
                    )
            })}
        </div>
        
    )
}

export default HomeList;