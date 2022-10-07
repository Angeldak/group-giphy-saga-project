import { useSelector } from "react-redux";
import FavListItem from "../FavListItem/FavListItem";

function FavImageList() {
  const favList = useSelector((store) => store.favorites);

  return (
    <div className="container">
      {favList.map((item) => (
        <FavListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FavImageList;
