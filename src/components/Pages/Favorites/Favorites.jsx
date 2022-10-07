import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FavImageList from "../../FavImageList/FavImageList";

function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FAVORITES" });
    dispatch({ type: "GET_CATEGORIES" });
  }, []);
  return <FavImageList />;
}

export default Favorites;
