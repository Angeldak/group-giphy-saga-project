import { useDispatch, useSelector } from "react-redux";

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
        <div  key={props.index}>
            <img src={props.gif.images.fixed_height.url} />
            <h4>{props.gif.title}</h4>
            {props.alreadyFavorite?<p>Already Favorited</p>:<button onClick={() => markFavorite(props.gif.images.fixed_height.url)}>Favorite</button>}
        </div>
    )
}

export default HomeListItem;