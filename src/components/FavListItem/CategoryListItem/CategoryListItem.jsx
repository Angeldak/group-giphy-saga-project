function CategoryListItem({ item }) {
  return (
    <li>
      <input value={item.name} type="radio" name="categories" id={item.name} />
      <label htmlFor={item.name}>{item.name}</label>
    </li>
  );
}

export default CategoryListItem;
