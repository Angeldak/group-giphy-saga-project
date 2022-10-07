import { useDispatch, useSelector } from "react-redux";
import "./HomeListItem.css";

function HomeListItem(props) {
  const favorites = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  const markFavorite = (url) => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: url,
    });
  };
  console.log("This is props.fav", props.alreadyFavorite);
  return (
    <div key={props.index} className="resultGifDiv">
      <img src={props.gif.images.fixed_height.url} />
      <div>
        {props.alreadyFavorite ? (
          <p className="searchGifButtons">💚</p>
        ) : (
          <button
            className="favButton"
            onClick={() => markFavorite(props.gif.images.original.url)}
          >
            Add to Favorites 💚
          </button>
        )}
        <h4 className="searchGifButtons">{props.gif.title}</h4>
      </div>
    </div>
  );
}

export default HomeListItem;
