import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeListItem from "../HomeListItem/HomeListItem";

function HomeList() {
    const searchResults = useSelector(store => store.gifReducer);
    const favorites = useSelector(store => store.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_FAVORITES'
        })
    }, []);

    return (
        <div className="searchResultsDiv container">
            <h2>Search Results</h2>
            {'data' in searchResults && searchResults.data.map((gif, index) => {
                    let urlCheck = favorites.some((item) => {
                        return String(item.url) === String(gif.images.fixed_height.url)
                    }) 
                     return (
                        <HomeListItem key={index} gif={gif} index={index} favorites={favorites} alreadyFavorite={urlCheck}/>
                            )
            })}
        </div>
        
    )
}

export default HomeList;