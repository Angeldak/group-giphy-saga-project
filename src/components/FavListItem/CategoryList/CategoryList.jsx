import { useSelector } from "react-redux";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

function CategoryList() {
  const categories = useSelector((store) => store.categories);

  return (
    <div>
      {categories.map((item) => (
        <CategoryListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CategoryList;
