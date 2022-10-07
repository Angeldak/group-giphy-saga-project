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

    // const markFavorite = (url) => {
        // let urlCheck = favorites.some((item) => {
        //     console.log('this is item: ', item.url, 'this is url: ', url);
        //     return String(item.url) === String(url)
        // }
    //     )
    //     console.log('this is urlCheck: ', urlCheck);
    //     if (!urlCheck) {
    //         console.log('Sending: ');
    //         dispatch({
    //         type: 'ADD_FAVORITE',
    //         payload: url
    //     });
    //     }
    //     console.log('Did not send');
    // }

    return (
        <div className="searchResultsDiv">
            <h2>HomeList</h2>
            {/* <p>{JSON.stringify(searchResults.data)}</p> */}
            {'data' in searchResults && searchResults.data.map((gif, index) => {
                    // console.log('this is gif in list: ', gif);
                    let urlCheck = favorites.some((item) => {
                        // console.log('this is item: ', item.url, 'this is url: ', url);
                        return String(item.url) === String(gif.images.fixed_height.url)
                    }) 
                     return (
                        <HomeListItem key={index} gif={gif} index={index} favorites={favorites} alreadyFavorite={!urlCheck}/>
                            )
                    // return(
                    //     <div  key={index}>
                    //         <img src={gif.images.fixed_height.url} />
                    //         <h4>{gif.title}</h4>
                    //         <button onClick={() => markFavorite(gif.images.fixed_height.url)}>Favorite</button>
                    //     </div>
                    // )
            })}
        </div>
        
    )
}

export default HomeList;