import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavListItem from "../FavListItem/FavListItem";

function FavImageList() {
  const favList = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FAVORITES" });
  }, []);

  return (
    <div className="container">
      {favList.map((item) => (
        <FavListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FavImageList;
