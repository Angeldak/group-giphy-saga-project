import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function HomeListItem(props) {
    const favorites = useSelector(store => store.favorites);
    const dispatch = useDispatch();
    const [alreadyFavorite, setAlreadyFavorite] = useState(false);

    // useEffect(() => {
    //     dispatch({
    //         type: 'GET_FAVORITES'
    //     })
    // }, []);

    const markFavorite = (url) => {
        let urlCheck = props.favorites.some((item) => {
            // console.log('this is item: ', item.url, 'this is url: ', url);
            return String(item.url) === String(url)
        }
        )
        console.log('this is urlCheck: ', urlCheck);
        if (!urlCheck) {
            console.log('Sending: ');
            dispatch({
            type: 'ADD_FAVORITE',
            payload: url
        });
        setAlreadyFavorite(false);
        } else {
            setAlreadyFavorite(true);
        }
        console.log('Did not send');
    }
    
    return(
        <div  key={props.index}>
            <img src={props.gif.images.fixed_height.url} />
            <h4>{props.gif.title}</h4>
            {alreadyFavorite?<p>Already Favorited</p>:<button onClick={() => markFavorite(props.gif.images.fixed_height.url)}>Favorite</button>}
        </div>
    )
}

export default HomeListItem;