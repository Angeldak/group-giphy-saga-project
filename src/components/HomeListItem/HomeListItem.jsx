import { useDispatch, useSelector } from "react-redux";
import './HomeListItem.css'

function HomeListItem(props) {
    const favorites = useSelector(store => store.favorites);
    const dispatch = useDispatch();

    const markFavorite = (url) => {
            dispatch({
            type: 'ADD_FAVORITE',
            payload: url
        });
    }
    console.log('This is props.fav', props.alreadyFavorite);
    return(
        <div  key={props.index} className="resultGifDiv">
            <img src={props.gif.images.fixed_height.url} />
            {props.alreadyFavorite?<p>Already Favorited 💚</p>:<button onClick={() => markFavorite(props.gif.images.fixed_height.url)}>Add to Favorites 💚</button>}
            <h4>{props.gif.title}</h4>
        </div>
    )
}

export default HomeListItem;